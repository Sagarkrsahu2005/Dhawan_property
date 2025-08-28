import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Usage example for layout.tsx:
// import { GoogleAnalytics } from '@/components/google-analytics'
// 
// In your layout component:
// <GoogleAnalytics measurementId="G-XXXXXXXXXX" />

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

// Pre-defined tracking functions for common real estate events
export const trackPropertyView = (propertyId: string, propertyTitle: string) => {
  trackEvent('property_view', {
    property_id: propertyId,
    property_title: propertyTitle,
  })
}

export const trackInquiry = (inquiryType: string, propertyId?: string) => {
  trackEvent('inquiry_submitted', {
    inquiry_type: inquiryType,
    property_id: propertyId,
  })
}

export const trackPhoneCall = () => {
  trackEvent('phone_call_clicked')
}

export const trackWhatsApp = () => {
  trackEvent('whatsapp_clicked')
}

export const trackBrochureDownload = (propertyId: string) => {
  trackEvent('brochure_download', {
    property_id: propertyId,
  })
}
