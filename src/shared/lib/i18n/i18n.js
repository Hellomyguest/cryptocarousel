import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "ru-Ru",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          lottery: {
            jackpot: "Jackpot of the week:",
            timer: "Until the end of the draw:",
            play: "Play",
            top: "Top 10 participants:",
            top10: "Top-10",
            all: "Show all",
            hide: "hide",
          },
          navigation: {
            navigation: "Navigation",
            login: "Login",
            homePage: "Home page",
            games: "Games",
            referral: "Referral program",
            about: "About us",
            support: "Support",
            logout: "Logout",
            contacts: "Contacts",
          },
          signIn: {
            notificationMessage:
              "Authorization requires the installed MetaMask extension",
            signInTitle: "Connect wallet:",
          },
          games: {
            title: "Games",
            sorting: "Sorting",
            direction: "First new ",
            all: "Show all",
          },
          about: {
            title: "About us",
            description:
              "Crypto Carousel is a modern online game development team. All our projects use smart contracts, which allows users not only to get unique sensations and emotions, but also to multiply their income at times.",
            opennessTitle: "Openness",
            opennessText:
              "All of our smart contracts are fully accessible to the user, which allows you to check the rules used and control the course of the game.",
            securityTitle: "Security",
            securityText:
              "A smart contract is a program code that is considered executed only if both parties have met all the conditions. This results in complete protection of the user from dishonest play.",
            anonymityTitle: "Anonymity",
            anonimityText:
              "Our projects allow you to play from any device and be anywhere with guaranteed anonymity. The funds received do not go through banking procedures, being immediately credited to your cryptocurrency accounts.",
          },
          referral: {
            title: "Referral program",
            text: "Invite friends to the game using your unique link and get a reward of up to 10% from each game of the referred friend!",
            more: "More",
            auth: "Login",
            copied: "Copied!",
            whatToDo: "What should be done?",
            howItWork: "How it works",
            description:
              "Each user has his own individual link, which he can share with friends and receive rewards",
            getLink: "Get a link",
            findLink:
              "You can find your unique link and copy its address on the «Referral Program» page",
            addLink: "Add a link",
            sendLink:
              "To receive income from your link, you need to send it to your friends, as well as place it in all traffic sources",
            earn: "Earn",
            earnDescription:
              "You will automatically receive a percentage of the invited friend's bet directly to your wallet",
            accrual: "Accrual system",
            firstLevel: "First level:",
            firstLevelDescription:
              " you get 5% of the rate of a friend who came through your link",
            secondLevel: "Second level:",
            secondLevelDescription:
              " the bet of a player who came from your friend automatically brings you 3%",
            thirdLevel: "Third level:",
            thirdLevelDescription:
              " invited player of the third level will bring you 1%",
            you: "You",
            youDescription:
              "share your referral link and earn from friends' bets",
            step1Level: "1 level",
            step1LevelDescription:
              "5% of the rate of a friend who came through your link",
            step2Level: "2 level",
            step2LevelDescription:
              "the bet of a player who came from your friend brings you 3%",
            step3Level: "3 level",
          },
          bitSpin: {
            toStart:
              "To start the game, you need to select a bet and click the «Start» button",
            minBet: "Minimum bet -",
            jackpot: "Jackpot of the week",
            start: "Start",
            bet: "Your bid",
            lastWin: "Previous win",
            balance: "Balance",
          },
          bitSpinRules: {
            points: "Points",
            multiplier: "Multiplier",
            rulesTitle: "Game rules:",
            rules1:
              "To start the game, you need to select a bet and click «Start» button. The reels will start spinning. At the moment of their complete stop, a combination will form in the game window.",
            rules2: "Game cost - ",
            rules3:
              " BNB. If the bet is more than the cost of the game, then as many games automatically take place, as long as the bet is enough.",
            combinations: "Winning combinations are:",
            combinationsSmall: "Winning combinations",
            rule1: "One point is awarded for each winning combination.",
            rule2:
              "The coincidence of cells in two horizontal or two vertical lines will bring an additional 3 points",
            rule3:
              "The winnings are calculated depending on the points scored:",
            jackpot: "Weekly Jackpot",
            jackpotDescription:
              "Also, each player participates in the weekly jackpot draw, the amount of which is 10% of the bets of all players. Each game brings the player points equal to the size of the bet * 100. By the end of the week, the first top 10 players will share the jackpot in the following ratio:",
            place: "place",
          },
        },
      },
      "ru-RU": {
        translation: {
          lottery: {
            jackpot: "Джекпот недели:",
            timer: "До конца розыгрыша:",
            play: "Играть",
            top: "Топ-10 участников:",
            top10: "Топ-10",
            all: "Все",
            hide: "Скрыть",
          },
          navigation: {
            navigation: "Навигация",
            login: "Вход",
            homePage: "Главная страница",
            games: "Игры",
            referral: "Реферальная программа",
            about: "О нас",
            support: "Поддержка",
            logout: "Выход",
            contacts: "Контакты",
          },
          signIn: {
            notificationMessage:
              "Для авторизации необходимо установленное расширение MetaMask",
            signInTitle: "Подключить кошелек:",
          },
          games: {
            title: "Игры",
            sorting: "Сортировка",
            direction: "Сначала новые ",
            all: "Показать все",
          },
          about: {
            title: "О нас",
            description:
              "Crypto Carousel - это современная команда разработчиков онлайн-игр. Все наши проекты используют смарт-контракты, что позволяет пользователям не только получать уникальные ощущения и эмоции, но и в разы приумножить свои доходы.",
            opennessTitle: "Открытость",
            opennessText:
              "Все наши смарт-контракты находятся в полной доступности у пользователя, что позволяет проверить используемые правила и контролировать ход игры.",
            securityTitle: "Безопасность",
            securityText:
              "Смарт-контракт – программный код, который считается исполненным лишь в случае, если обе стороны выполнили все условия. Это приводит к полной защите пользователя от нечестной игры.",
            anonymityTitle: "Анонимность",
            anonimityText:
              "Наши проекты позволяют вести игру с любого устройства и находиться в любой точке с гарантированной анонимностью. Полученные средства не проходят банковских процедур, поступая сразу на Ваши криптовалютные счета.",
          },
          referral: {
            title: "Реферальная програма",
            text: "Приглашай в игру друзей по своей уникальной ссылке и получай вознаграждение до 10% с каждой игры приведенного друга!",
            more: "Подробнее",
            auth: "Авторизуйтесь",
            copied: "Скопировано!",
            whatToDo: "Что нужно сделать?",
            howItWork: "Как это работает",
            description:
              "У каждого пользователя своя индивидуальная ссылка, которой он может делиться с друзьями и получать вознаграждения",
            getLink: "Получите ссылку",
            findLink:
              "Найти свою уникальную ссылку и скопировать ее адрес можно на странице «Реферальная программа»",
            addLink: "Добавьте ссылку",
            sendLink:
              "Чтобы получать доход со своей ссылки вам необходимо разослать ее друзьям, а также разместить во всех источниках трафика",
            earn: "Зарабатывайте",
            earnDescription:
              "Вы будете автоматически получать процент от ставки приглашенного друга прямо на свой кошелек",
            accrual: "Система начисления",
            firstLevel: "Первый уровень:",
            firstLevelDescription:
              " вы получаете 5% от ставки друга, пришедшему по вашей ссылке",
            secondLevel: "Второй уровень:",
            secondLevelDescription:
              " ставка игрока, пришедшего от вашего друга автоматически приносит вам 3%",
            thirdLevel: "Третий уровень:",
            thirdLevelDescription:
              " приглашенный игрок третьего уровня принесет вам 1%",
            you: "Вы",
            youDescription:
              "делитесь реферальной ссылкой и зарабатывайте со ставок друзей",
            step1Level: "1 уровень",
            step1LevelDescription:
              "5% от ставки друга, пришедшему по вашей ссылке",
            step2Level: "2 уровень",
            step2LevelDescription:
              "ставка игрока, пришедшего от вашего друга приносит вам 3%",
            step3Level: "3 уровень",
          },
          bitSpin: {
            toStart:
              "Чтобы начать игру, вам нужно выбрать ставку и нажать кнопку «Старт»",
            minBet: "Минимальная ставка - ",
            jackpot: "Джекпот недели",
            start: "Старт",
            bet: "Ваша ставка",
            lastWin: "Предыдущий выигрыш",
            balance: "Баланс",
          },
          bitSpinRules: {
            points: "Баллы",
            multiplier: "Множитель",
            rulesTitle: "Правила игры:",
            rules1:
              "Чтобы начать игру, Вам нужно выбрать ставку и нажать на кнопку «Старт». Барабаны начнут вращаться. В момент их полной остановки в окне игры сложится комбинация.",
            rules2: "Стоимость игры - ",
            rules3:
              " BNB. Если ставка больше стоимости игры, то автоматически происходит столько игр, на столько хватит ставки.",
            combinations: "Выигрышными комбинациями считаются:",
            combinationsSmall: "Выигрышные комбинации",
            rule1:
              "За каждую выигрышную комбинацию начисляется по одному баллу.",
            rule2:
              "Совпадение ячеек в двух горизонтальных или двух вертикальных линиях принесет дополнительно 3 балла",
            rule3: "Выйгрыш начисляется в зависимости от набранных баллов:",
            jackpot: "Еженедельный джекпот",
            jackpotDescription:
              "Также, каждый игрок участвует в еженедельном розыгрыше джекпота, сумма которого составляет 10% от ставок всех игроков. Каждая игра приносит игроку очки, равные размеру ставки*100. К концу недели первые топ-10 игроков разделят джекпот в следующем соотношении:",
            place: "место",
          },
        },
      },
    },
  });

export default i18n;
