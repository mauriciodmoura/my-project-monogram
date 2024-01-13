import React, { useState, useEffect, useRef } from 'react';

const TypingAnimation: React.FC = () => {
  const fullText = `import Document, { Html, Head, Main, NextScript } from 'next/document'

    class MyDocument extends Document {
      render() {
        return (
          <Html lang="en">
            <Head>
              {/*Fonts*/}
              <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
              <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
              <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
              <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
              <noscript>
                <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
              </noscript>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }

    export default MyDocument
    `;

  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);
  const index = useRef(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (typing) {
      timer = setInterval(() => {
        setText((currentText) => {
          if (currentText.length === fullText.length) {
            setTyping(false);
            clearInterval(timer);
            return currentText;
          }
          return fullText.slice(0, currentText.length + 1);
        });
      }, 50);
    }

    return () => clearInterval(timer);
  }, [fullText, typing]);

  return (
  <div className="absolute inset-0 flex justify-center mx-4 mt-2 mb-12 sm:mx-8 lg:mx-14 z-10">
      <div className="bg-commandScreen rounded-xl sm:rounded w-full h-full p-2 sm:p-8">
        <pre className="text-commandLine overflow-hidden my-4.5 mx-6 md:my-10 md:mx-14 lg:my-16 lg:mx-20 bg-black rounded-lg font-mono text-left text-s sm:text-md md:text-m lg:text-lg xl:text-xl">
          {text}
        </pre>
    </div>
  </div>
  );
};

export default TypingAnimation;
