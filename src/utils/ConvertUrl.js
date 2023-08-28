export function convertToEmbeddedUrl(url) {
    if (url?.match(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/)) {
      const videoId = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
      const embedUrl = "https://www.youtube.com/embed/" + videoId;
      return embedUrl;
    } else {
      return null;
    }
  }
  