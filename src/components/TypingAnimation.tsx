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
  const index = useRef(0);

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
  }, [typing]);

  return (
    <div className="absolute rounded-lg p-4 z-0">
      <div className="bg-commandScreen rounded w-full h-full mt-76 sm:mt-44 md:mt-18 lg:mt-0 xl:mt-0 px-6 py-4 sm:px-22 sm:py-12 md:px-18 md:py-10 lg:px-26 lg:py-20">
        <pre className="text-commandLine overflow-hidden bg-black rounded-lg font-mono text-left text-sx sm:text-md md:text-lg lg:text-lg xl:text-xl whitespace-pre-wrap">
          {text}
        </pre>
      </div>
    </div>
  );
};

export default TypingAnimation;
