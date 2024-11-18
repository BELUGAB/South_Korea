// Liste des utilisateurs avec leurs ID, mots de passe, contenus et images
const users = [
  {
    id: "관휘",
    password: "알겠어", // j'ai compris
    content:
      "제가 이곳에 머무는 것을 매우 특별하게 만들어주셔서 아무리 감사해도 부족함이 없습니다. 여러분과 함께한 모든 순간은 한국 문화의 새로운 면을 발견할 수 있었고 많은 것에 눈을 뜨게 해주었습니다. 당신은 나에게 단순한 친구 그 이상이었습니다. 당신은 다른 대륙에서 온 나의 쌍둥이입니다. 우리의 유대는 단순한 우정 그 이상이며, 당신의 길을 건너게 된 것은 정말 행운이라고 생각합니다. 여러분의 지지와 우정, 그리고 우리가 나누었던 모든 대화는 영원히 남을 것입니다. 덕분에 이번 숙박은 잊지 못할 추억이 되었고 함께한 시간을 절대 잊지 못할 것입니다.",
    image:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGd2aWR5bmp1N3gxdjVvcWN1dDA5dGw5OWptczduY2k4c3g0dndodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l54A2pYPSOvWuXKnWV/giphy.gif",
  },
  {
    id: "시온",
    password: "passwordimpossibleatrouverhaha2025", // 바보
    content:
      "이렇게 많은 시간을 함께 해주셔서 감사합니다! 영어 실력이 정말 많이 늘었네요! 정말 대단하네요! 영어 시험 준비가 된 것 같아요. 그리고 네 남자친구 준하를 소개해줘서 고마워. 그 사람은 정말 천재예요! 두 분의 행복을 기원하며, 다시 뵙기를 고대합니다!",
    image:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb253MTY1cWpubnViMnY5NGZpYjh2azRtODM3bGxyMWlreTl2dGkxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L9Q2rzzBHrfv4a1y4h/giphy.gif", // gif mignon
  },
  {
    id: "은서",
    password: "passwordimpossibleatrouverhaha2025잘자", // 잘자 bonne nuit
    content:
      "너는 내가 만난 첫 번째 한국 친구였어! 더 많은 시간을 함께 보내고 싶었지만, 네가 바빠서 아쉬웠어. 그래도 네가 내게 소개해준 친구들과 인연을 맺고, 한국에서 소중한 시간을 보낼 수 있어서 정말 고마워. 이번 여행은 내 인생에서 절대 잊지 못할 거야. 앞으로도 기쁨과 성공이 가득하길 바라. 언젠가 다시 만날 수 있기를 바랄게. 안녕!",
    image:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdhZngzZDRvMjFqMXZic3Q2eWpyMTAyMzY3eXM0ZDkxMDZwdzczaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/osjgQPWRx3cac/giphy.gif", // gif mignon
  },
  {
    id: "소희",
    password: "passwordimpossibleatrouverhaha2025", // 미쳤어 tu es fou ?
    content:
      "너는 내가 본 한국 사람 중에서, 퐁이랑 함께 가장 유쾌하고 엉뚱한 친구야! 함께한 모든 순간들에 감사해. 너희와 같이 있으면 정말 많이 웃게 돼. 우리 같이 멍 때리거나, 식당에 가거나, 백수처럼 아무것도 안 하던 모든 순간들이 절대 잊지 못할 기억이야. 이 여행은 너 없이는 달랐을 거야. 잊지 못할 순간들을 함께해 줘서 고마워. 앞으로도 행복하길 바라고, 많은 행운이 함께하길 바랄게. 다시 만날 날을 기대하면서, 고마워!",
    image:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXh3ZXI3OWwwOWwxdTJlbGt4YjBwbXRqYXN5N3FodzJmeGtmd2c3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UtTCAV3dMExk5h0GzY/giphy.gif", // gif mignon
  },
  {
    id: "퐁",
    password: "passwordimpossibleatrouverhaha2025", // 비밀 네 secret oui
    content:
      "자바걸처럼, 너도 내가 한국에서 만난 가장 유쾌하고 엉뚱한 친구야! 너희 덕분에 내 여행이 더 빛날 수 있었어. 많은 것들을 경험할 수 있게 해줘서 정말 고마워. 이제 한국 음식이 얼마나 별로인지 더 이상 너희에게 말할 수 없다는 게 슬퍼질 것 같아. 앞으로도 성공과 행복이 가득하길 바라. 언제나 밝은 모습 잃지 말고! 또 만날 수 있기를 바랄게",
    image:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjE0MXBzNWl1dDE4M2xvMzI5ZGpxMWxrZXFkcmNxazJkdzBqdWM2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2iY5HtjIWVaPKc2Btq/giphy.gif", // gif mignon
  },
  {
    id: "선주",
    password: "passwordimpossibleatrouverhaha2025", // 힘내 courage
    content:
      "너는 내가 한국에서 만난 사람 중에 가장 친절한 사람이야. 항상 웃고 있고, 기쁨과 좋은 에너지로 가득 차 있어서 정말 고마워! 그런 모습 절대 바꾸지 말아줘! 함께한 모든 순간들에 감사하고, 또 한국어를 가르쳐 준 것에도 고마워. 너 덕분에 이 나라에 대해 정말 많이 배웠어! 앞으로 너에게 많은 성공과 행복, 그리고 행운이 가득하길 바래, 정말 자격이 있는 사람이니까. 마음 깊이 감사해, 언젠가 다시 만날 수 있기를 바래! 안녕, 또 봐 :)",
    image:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajA0enU4d2xvNm1lZWFjZHFrc3VtcnU5eHA3d3hxbWN4cHZ5anBmOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfvEdnjjcAoea0naii/giphy.gif",
  },
  // Utilisateur admin ajouté ici
  {
    id: "admin",
    password: "coree2024",
    content: "", // Pas de message prédéfini
    image: "", // Pas d'image
  },
];

document.getElementById("password").addEventListener("focus", () => {
  document.getElementById("password").setAttribute("lang", "ko");
});

// Fonction de validation du formulaire de connexion
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    const user = users.find((u) => u.id === userId && u.password === password);

    if (user) {
      // Enregistrer les informations de l'utilisateur dans localStorage
      localStorage.setItem("userId", user.id);
      localStorage.setItem("userContent", user.content);
      localStorage.setItem("userImage", user.image);

      // Si l'utilisateur est admin, rediriger vers la page admin
      if (user.id === "admin") {
        window.location.href = "admin.html"; // Rediriger vers admin
      } else {
        // Sinon, rediriger vers la page de contenu
        window.location.href = "content.html";
      }
    } else {
      document.getElementById("error-message").textContent =
        "아이디 또는 비밀번호가 잘못되었습니다."; // Message d'erreur
    }
  });

function goToHomePage() {
  window.location.href = "index.html"; // Redirige vers l'accueil
}
