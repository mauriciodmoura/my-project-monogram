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
          return fullText.slice(0, currentText.length + 5);
        });
      }, 50);
    }

    return () => clearInterval(timer);
  }, [typing]);

  return (
    <div className="absolute p-4 z-0">
      <div className="bg-commandScreen rounded-lg sm:rounded w-full h-full p-2 sm:p-8">
        <pre className="text-commandLine overflow-hidden bg-black rounded-lg font-mono text-left text-sx sm:text-md md:text-md lg:text-lg xl:text-xl md:min-h-[340px] md:min-w-[490px] lg:min-h-[420px] lg:min-w-[620px]">
          {text}
        </pre>
      </div>
    </div>
  );
};

export default TypingAnimation;
