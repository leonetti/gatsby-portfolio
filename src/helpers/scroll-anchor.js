
export function getAnchor() {
  return decodeURI(global.location.hash);
}

export function scrollToAnchor(scroll) {
  const anchor = getAnchor();
  if (anchor) {
    const element = global.window.document.querySelector(anchor);

    if (element) {
      scroll.animateScroll(element);
    }
  }
}
