"use client";
import React, { useState, useRef, useEffect } from "react";

interface AIInputBarProps {
  onSendMessage?: (message: string, hasMedia?: boolean) => void;
  onVoiceInput?: () => void;
  onImageUpload?: (file: File) => void;
  placeholder?: string;
  disabled?: boolean;
  quickSuggestions?: string[];
}

const AIInputBar: React.FC<AIInputBarProps> = ({
  onSendMessage,
  onVoiceInput,
  onImageUpload,
  placeholder = "Ask me anything...",
  disabled = false,
  quickSuggestions = [
    "Explain this concept",
    "Summarize this text",
    "Write a code example",
    "Translate to English",
    "Generate ideas",
  ],
}) => {
  const [inputValue, setInputValue] = useState("");
  const [hasUploadedMedia, setHasUploadedMedia] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleSend = () => {
    if (inputValue.trim() || hasUploadedMedia) {
      onSendMessage?.(inputValue.trim(), hasUploadedMedia);
      setInputValue("");
      setHasUploadedMedia(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload?.(file);
      setHasUploadedMedia(true);
    }
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveMedia = () => {
    setHasUploadedMedia(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // reset file input
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
      }, 0);
    }
  };

  const canSend = inputValue.trim().length > 0 || hasUploadedMedia;

  return (
    <section className="w-full max-w-4xl mx-auto p-4 py-0 lg:-mt-8">
      <div className="relative">
        {/* Main input container */}
        <div className="flex items-end gap-3 p-3 bg-[#FCFAF8] backdrop-blur-sm rounded-3xl border border-gray-300/50 shadow-lg">
          {/* Voice input button */}
          <button
            onClick={onVoiceInput}
            disabled={disabled}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-[#333333] hover:bg-[#333333] active:scale-95 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Voice input"
          >
            <svg
              className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </button>

          {/* Text input area + media indicator */}
          <div className="flex-1 flex flex-col relative">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full min-h-[44px] max-h-32 px-4 py-3 bg-transparent text-gray-800 placeholder-gray-500 resize-none outline-none overflow-hidden"
              style={{ lineHeight: "1.4" }}
            />

            {/* Media indicator with remove button */}
            {hasUploadedMedia && (
              <div className="mt-1 ml-1 self-start">
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#ff9800]/20 text-[#ff9800] text-xs rounded-full">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Media attached
                  <button
                    onClick={handleRemoveMedia}
                    className="ml-1 text-[#ff9800] hover:text-red-500 transition-colors"
                    aria-label="Remove media"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Image upload button */}
          <div className="relative">
            <button
              onClick={handleImageUploadClick}
              disabled={disabled}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-[#333333] hover:bg-[#333333] active:scale-95 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Upload image"
            >
              <svg
                className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!canSend || disabled}
            className={`flex-shrink-0 w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center group ${
              canSend && !disabled
                ? "bg-[#333333] hover:bg-[#333333] active:scale-95"
                : "bg-gray-600/50 cursor-not-allowed"
            }`}
            aria-label="Send message"
          >
            <svg
              className={`w-5 h-5 text-white transition-transform duration-200 ${
                canSend ? "group-hover:scale-110 group-hover:translate-x-0.5" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        {/* Responsive adjustments */}
        <style jsx>{`
          @media (max-width: 640px) {
            .flex-shrink-0 {
              width: 2.25rem;
              height: 2.25rem;
            }
            .flex-shrink-0 svg {
              width: 1rem;
              height: 1rem;
            }
          }
        `}</style>
      </div>

      {/* Quick Suggestions */}
      {quickSuggestions.length > 0 && (
        <div className="mt-3 px-1">
          <div className="flex flex-wrap gap-5 justify-center">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                disabled={disabled}
                className="px-3 py-1.5 bg-gray-100 hover:bg-[#ff9800]/10 hover:border-[#ff9800]/30 border border-gray-200 rounded-4xl text-sm text-gray-700 hover:text-[#ff9800] transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AIInputBar;
