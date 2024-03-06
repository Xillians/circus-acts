import React from "react";
import "./theme.scss";

const metadata = {
  title: 'Circus show sheet maker',
  description: 'A website to prepare your own circus show',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Xillians" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
          {children}
      </body>
    </html>
  )
}