import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Askhumphrey.module.css";
import Navigation from "@/components/Menu";
import Link from "next/link";
import axios from "axios";

export default function AskHumphrey() {
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
        <h1 className={styles.title}>New Habits</h1>
        {chatLog.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
        <form className={styles.message} onSubmit={handleSubmit}>
          <textarea
          
            type="text"
            placeholder="Ask Humphrey a question about addiction"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows="1"

          />
          <button type="submit" className={styles.buttonContainer}>
            <Image src="/Graphics/send.png" alt="Send" width={24} height={24} />
          </button>
        </form>
      </main>
    </>
  );
}
