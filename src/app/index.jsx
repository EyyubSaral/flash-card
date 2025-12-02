import { useState } from "react";

export default function FlashCard() {
  const questions = [
    {
      question: "JavaScript'te '==' ve '===' arasındaki fark nedir?",
      answer:
        "'==' sadece değerleri karşılaştırır, '===' ise değer + tür (type) karşılaştırması yapar.",
    },
    {
      question: "let, const ve var arasındaki fark nedir?",
      answer:
        "var function-scoped, let ve const block-scoped'dur. const yeniden atanamaz, let atanabilir.",
    },
    {
      question: "JavaScript'te hoisting nedir?",
      answer:
        "Değişken ve fonksiyon deklarasyonlarının kod çalıştırılmadan önce üst tarafa taşınmasıdır.",
    },
    {
      question: "Arrow function ile normal function arasındaki fark nedir?",
      answer:
        "Arrow function kendi 'this' bağlamına sahip değildir, daha kısa syntax kullanır.",
    },
    {
      question: "Array.map() ne işe yarar?",
      answer: "Her elemanı işleyip yeni bir array döndürür.",
    },
    {
      question: "Array.filter() ne işe yarar?",
      answer: "Şartı sağlayan elemanlardan oluşan yeni bir array döndürür.",
    },
    {
      question: "Callback function nedir?",
      answer:
        "Bir fonksiyona argüman olarak verilen ve daha sonra çalışan fonksiyondur.",
    },
    {
      question: "Promise ne işe yarar?",
      answer: "Asenkron işlemlerin sonucunu (success veya fail) temsil eder.",
    },
    {
      question: "JSON.stringify() ne yapar?",
      answer: "Object/array'i JSON string'e çevirir.",
    },
    {
      question: "JSON.parse() ne yapar?",
      answer: "String halindeki JSON'u tekrar objeye çevirir.",
    },
    {
      question: "NaN ne demektir?",
      answer: "Not-a-Number — matematiksel olarak geçersiz işlem sonucudur.",
    },
    {
      question: "LocalStorage ile SessionStorage arasındaki fark nedir?",
      answer: "LocalStorage kalıcıdır, SessionStorage sekme kapanınca silinir.",
    },
    {
      question: "Spread operator (...) ne işe yarar?",
      answer: "Array veya objeyi kopyalamak ve genişletmek için kullanılır.",
    },
    {
      question: "Rest parameter (...) ne işe yarar?",
      answer: "Fonksiyon parametrelerini tek bir array altında toplar.",
    },
    {
      question: "Event bubbling nedir?",
      answer:
        "Bir event'in çocuk elemandan başlayıp parent'lara doğru yayılmasıdır.",
    },
  ];

  const [qNum, setQNum] = useState(0);
  const [isToggled, setIsToggled] = useState(true);

  const toggleQuestion = (e) => {
    setIsToggled((prev) => !prev);
  };

  const next = (e) => {
    if (qNum + 1 === questions.length) return setQNum(0);
    setQNum((prev) => prev + 1);
  };
  const prev = (e) => {
    if (qNum === 0) return setQNum(questions.length - 1);
    setQNum((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 w-full max-w-md mx-auto">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-blue-500 transition-all duration-300"
          style={{ width: `${((qNum + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div
        className="q-container cursor-pointer text-center 
                bg-white shadow-md border border-gray-200 
                rounded-xl p-5 text-lg font-medium 
                transition-all duration-200 hover:shadow-lg"
        onClick={toggleQuestion}
      >
        {isToggled ? questions[qNum].question : questions[qNum].answer}
      </div>

      <div className="buttons flex items-center justify-between w-full gap-4">
        <button
          className="prev bg-green-500 text-white px-4 py-2 rounded-lg 
                 shadow hover:bg-green-600 transition"
          onClick={() => prev()}
        >
          Prev
        </button>

        <button
          onClick={() => setIsToggled(true)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg
                 hover:bg-gray-300 transition"
        >
          Hide Answer
        </button>

        <button
          className="next bg-blue-500 text-white px-4 py-2 rounded-lg 
                 shadow hover:bg-blue-600 transition"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
