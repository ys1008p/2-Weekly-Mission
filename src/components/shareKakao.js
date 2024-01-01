export const shareKakao = ({ title }) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init('abbd86379133e623416676a637862b22');
    }

    kakao.Link.sendDefault({
      objectType: "feed", 
      content: {
        title: `${title}`,
        description: `${title} 폴더 링크`,
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