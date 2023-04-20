import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Askhumphrey.module.css";
import Navigation from "@/components/Menu";
import Link from "next/link";
import axios from "axios";
import HumphreyFloat from "@/components/HumphreyFloat";

export default function AskHumphrey() {
  useEffect(() => {
    document.body.classList.add(styles.specificPage);

    return () => {
      document.body.classList.remove(styles.specificPage);
    };
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  return (
    <>
      <Head>
        <title>New Habits Web App | Ask Humphrey</title>
        <meta
          name="description"
          content="To identify and help those who suffer from Substance Misuse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className={styles.main}>
        <div className={styles.specificPage}>
          <h1 className={styles.title}>New Habits</h1>
          <div className={styles.imageContainer}>
            <HumphreyFloat />
          </div>
          <div className={styles.messagesContainer}>
          {chatLog.map((message, index) => (
            <div
              key={index}
              className={
                message.type === "bot" ? styles.botMessage : styles.userMessage
              }
            >
              {message.message}
            </div>
          ))}
          </div>
          <form className={styles.message} onSubmit={handleSubmit}>
            <textarea
              className={styles.noStyleInput}
              type="text"
              placeholder="Ask Humphrey 🐋👋"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading} // disable input field while bot is typing
            />
            <button type="submit" className={styles.buttonContainer}>
              {isLoading ? (
                <Image
                  src="/Graphics/spinner.gif"
                  alt="Loading"
                  width={50}
                  height={40}
                />
              ) : (
                <Image
                  src="/Graphics/send.png"
                  alt="Send"
                  width={24}
                  height={24}
                />
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
