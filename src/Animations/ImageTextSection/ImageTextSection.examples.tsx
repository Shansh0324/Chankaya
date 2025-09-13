// Example usage of ImageTextSection component
import React from "react";
import ImageTextSection, { AdvancedImageTextSection, ResponsiveImageTextSection } from "./ImageTextSection";

// Example 1: Basic usage with image on left
export function BasicLeftImageExample() {
  return (
    <ImageTextSection
      imageSrc="/assets/img1.jpeg"
      imageAlt="Travel destination"
      imagePosition="left"
      textContent="This is a basic example with the image on the left side and text on the right side."
    />
  );
}

// Example 2: Image on right side
export function BasicRightImageExample() {
  return (
    <ImageTextSection
      imageSrc="/assets/img2.jpeg"
      imageAlt="Travel destination"
      imagePosition="right"
      textContent="This example shows the image on the right side and text on the left side."
    />
  );
}

// Example 3: Multiple paragraphs
export function MultipleParagraphsExample() {
  return (
    <ImageTextSection
      imageSrc="/assets/img3.jpeg"
      imageAlt="Travel destination"
      imagePosition="left"
      textContent={[
        "First paragraph: We are passionate about creating unforgettable travel experiences.",
        "Second paragraph: Our team of experts ensures every journey is tailored to your preferences.",
        "Third paragraph: From planning to execution, we handle every detail with care and precision."
      ]}
    />
  );
}

// Example 4: Advanced customization
export function AdvancedCustomizationExample() {
  return (
    <AdvancedImageTextSection
      imageSrc="/assets/img4.png"
      imageAlt="Travel destination"
      imagePosition="right"
      imageWidth={600}
      imageHeight={400}
      textContent={[
        "Advanced customization allows you to control every aspect of the layout.",
        "You can adjust image dimensions, spacing, and positioning as needed."
      ]}
      spacing="pt-[20vw]"
      gap="gap-[6vw]"
      maxWidth="max-w-[95%]"
      textClassName="text-center"
      imageClassName="rounded-lg shadow-lg"
    />
  );
}

// Example 5: Responsive version
export function ResponsiveExample() {
  return (
    <ResponsiveImageTextSection
      imageSrc="/assets/img5.png"
      imageAlt="Travel destination"
      imagePosition="left"
      mobileImagePosition="top"
      textContent={[
        "This responsive version adapts to different screen sizes.",
        "On mobile, the image appears at the top by default, but you can customize this behavior."
      ]}
    />
  );
}

// Example 6: Different image positions
export function ImagePositionExamples() {
  return (
    <div className="space-y-20">
      {/* Image on left */}
      <ImageTextSection
        imageSrc="/assets/img1.jpeg"
        imageAlt="Left image"
        imagePosition="left"
        textContent="Image positioned on the left side with text on the right."
      />
      
      {/* Image on right */}
      <ImageTextSection
        imageSrc="/assets/img2.jpeg"
        imageAlt="Right image"
        imagePosition="right"
        textContent="Image positioned on the right side with text on the left."
      />
    </div>
  );
}

// Example 7: Custom styling
export function CustomStylingExample() {
  return (
    <ImageTextSection
      imageSrc="/assets/img6.png"
      imageAlt="Custom styled section"
      imagePosition="left"
      textContent="This example shows how you can apply custom styling to both the container and individual elements."
      className="bg-gradient-to-r from-blue-50 to-purple-50"
      textClassName="text-purple-800 font-semibold"
      imageClassName="rounded-full shadow-2xl"
      containerClassName="border-2 border-purple-200 rounded-xl p-8"
    />
  );
}

// Example 8: Usage in a page layout
export function PageLayoutExample() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
        
        <ImageTextSection
          imageSrc="/assets/img1.jpeg"
          imageAlt="Service 1"
          imagePosition="left"
          textContent={[
            "Service 1: We provide comprehensive travel planning services.",
            "Our experts work with you to create the perfect itinerary for your needs."
          ]}
        />
        
        <ImageTextSection
          imageSrc="/assets/img2.jpeg"
          imageAlt="Service 2"
          imagePosition="right"
          textContent={[
            "Service 2: Our accommodation booking service ensures you stay in the best places.",
            "We partner with top-rated hotels and unique accommodations worldwide."
          ]}
        />
        
        <ImageTextSection
          imageSrc="/assets/img3.jpeg"
          imageAlt="Service 3"
          imagePosition="left"
          textContent={[
            "Service 3: 24/7 support during your travels.",
            "Our team is always available to help you with any questions or issues."
          ]}
        />
      </div>
    </section>
  );
}
