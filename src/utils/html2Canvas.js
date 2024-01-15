import html2canvas from 'html2canvas';

export default function downloadResume () {
  console.log('execute')
  html2canvas(document.querySelector("#main")).then(canvas => {
    document.body.appendChild(canvas)
  });
}