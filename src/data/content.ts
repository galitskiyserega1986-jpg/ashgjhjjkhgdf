export const GUIDE_CONTENT = {
  hero: {
    title: "Создание сайтов с ИИ: Бесплатно и Без Лимитов",
    subtitle: "Полное руководство по использованию бесплатных инструментов, локальных моделей и open-source агентов, чтобы ваши токены никогда не закончились.",
    cta: "Начать изучение",
  },
  steps: [
    {
      title: "Шаг 1: Локальные LLM (Полная свобода)",
      description: "Самый надежный способ избежать лимитов — запустить модель на своем компьютере. Вы платите только за электричество.",
      tools: [
        {
          name: "Ollama",
          description: "Лучший инструмент для запуска Llama 3, Mistral и других моделей локально. Очень простая установка.",
          link: "https://ollama.com",
          type: "Infrastructure"
        },
        {
          name: "LM Studio",
          description: "GUI для поиска и запуска моделей с Hugging Face. Идеально для тех, кто не любит терминал.",
          link: "https://lmstudio.ai",
          type: "GUI"
        },
        {
          name: "LocalAI",
          description: "Создает API-совместимый с OpenAI сервер для ваших локальных моделей.",
          link: "https://localai.io",
          type: "Infrastructure"
        }
      ]
    },
    {
      title: "Шаг 2: Бесплатные API и Облачные Лимиты",
      description: "Если ваше железо не тянет локальные модели, используйте щедрые бесплатные тарифы.",
      tools: [
        {
          name: "Groq",
          description: "Невероятно быстрый вывод. Часто предоставляет бесплатный доступ к Llama 3 и Mixtral через API.",
          link: "https://groq.com",
          type: "Cloud API"
        },
        {
          name: "Google Gemini",
          description: "Огромное контекстное окно (до 2 млн токенов) и отличный бесплатный уровень в Google AI Studio.",
          link: "https://aistudio.google.com",
          type: "Cloud AI"
        },
        {
          name: "Hugging Face Chat",
          description: "Бесплатный доступ к самым новым open-source моделям через веб-интерфейс.",
          link: "https://huggingface.co/chat",
          type: "Web UI"
        }
      ]
    },
    {
      title: "Шаг 3: AI-Агенты и Инструменты Кодинга",
      description: "Используйте расширения, которые объединяют ИИ с вашим редактором кода.",
      tools: [
        {
          name: "Continue.dev",
          description: "Open-source плагин для VS Code и JetBrains. Позволяет подключить Ollama или любой бесплатный API.",
          link: "https://continue.dev",
          type: "IDE Plugin"
        },
        {
          name: "Codeium",
          description: "Отличная бесплатная альтернатива GitHub Copilot для индивидуальных разработчиков.",
          link: "https://codeium.com",
          type: "IDE Plugin"
        },
        {
          name: "GPT Engineer / OpenDevin",
          description: "Open-source агенты, которые могут писать целый проект по одному промпту.",
          link: "https://github.com/gpt-engineer-org/gpt-engineer",
          type: "Agent"
        }
      ]
    },
    {
      title: "Шаг 4: Бесплатный Хостинг",
      description: "После того как ИИ написал код, его нужно выложить в сеть бесплатно.",
      tools: [
        {
          name: "Vercel",
          description: "Лучший выбор для React/Next.js проектов. Автоматический деплой из GitHub.",
          link: "https://vercel.com",
          type: "Hosting"
        },
        {
          name: "Netlify",
          description: "Простой и надежный хостинг для статических сайтов и серверлесс функций.",
          link: "https://netlify.com",
          type: "Hosting"
        },
        {
          name: "GitHub Pages",
          description: "Полностью бесплатно для простых HTML/CSS/JS сайтов прямо из вашего репозитория.",
          link: "https://pages.github.com",
          type: "Hosting"
        }
      ]
    }
  ],
  comparison: [
    {
      feature: "Стоимость",
      local: "Бесплатно (0$)",
      cloud: "Бесплатно (с лимитами)",
      agent: "Зависит от API"
    },
    {
      feature: "Приватность",
      local: "Максимальная",
      cloud: "Средняя",
      agent: "Средняя"
    },
    {
      feature: "Скорость",
      local: "Зависит от GPU",
      cloud: "Очень высокая",
      agent: "Средняя"
    },
    {
      feature: "Сложность настройки",
      local: "Средняя",
      cloud: "Низкая",
      agent: "Средняя"
    }
  ],
  goldenStack: {
    title: "Золотой Стек для Бесплатного Разработчика",
    items: [
      { tool: "Ollama (Llama 3)", role: "Мозг (Локально)" },
      { tool: "Continue.dev", role: "Интеграция в VS Code" },
      { tool: "Google AI Studio", role: "Сложное планирование (Облако)" },
      { tool: "Vercel", role: "Публикация сайта" }
    ]
  }
};
