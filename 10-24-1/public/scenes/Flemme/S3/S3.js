import Component from "../../../js/Component.js";

export default class S3 extends Component {
  constructor({ onGoToS4 }) {
    super();
    this.html = "";
    this.onGoToS4 = onGoToS4;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S3/S3.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    document.getElementById("flemme-mid-player").volume = 0.11;
    document.getElementById("flemme-player").pause();
    document.getElementById("flemme-player").elemMusicOn = false;
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
