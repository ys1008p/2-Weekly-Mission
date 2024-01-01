export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init('abbd86379133e623416676a637862b22');
    }

    kakao.Link.sendDefault({
      objectType: "feed", 
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
        imageUrl:
          "https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png",
        link: {
          mobileWebUrl: "https://www.naver.com",
          webUrl: "https://www.google.com",
        },
      },
      buttons: [
        {
          title: "자세히 보러 가기",
          link: {
            mobileWebUrl: "https://www.naver.com",
            webUrl: "https://www.google.com",
          },
        },
      ],
    });
  }
};