import Script from 'next/script'
import React from 'react'

export const InitTheme: React.FC = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            var themeToSet = 'dark'
            document.documentElement.setAttribute('data-theme', themeToSet)
          })();
        `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
