// https://vike.dev/onPageTransitionStart

export async function onPageTransitionStart(pageContext) {
  console.log("Page transition start");
  console.log("pageContext.isBackwardNavigation", pageContext.isBackwardNavigation);
  document.body.classList.add("page-transition");
}
