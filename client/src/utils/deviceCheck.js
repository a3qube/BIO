export default {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      this.Android() ||
      this.BlackBerry() ||
      this.iOS() ||
      this.Opera() ||
      this.Windows()
    );
  },
};

export const deviceTypes = {
  MOBILE: 600,
  TABLET: 768,
  DESKTOP: 992,
  LG_DESKTOP: 1200,
};
export const getDeviceType = () => {
  const { width } = window.screen;
  const { MOBILE, TABLET, DESKTOP } = deviceTypes;
  if (width <= MOBILE) {
    return MOBILE;
  } else if (width <= TABLET) {
    return TABLET;
  } else if (width <= DESKTOP) {
    return DESKTOP;
  } else return DESKTOP;
};
