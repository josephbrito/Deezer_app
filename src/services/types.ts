interface ISinger {
  name: string;
  picture_big: string;
}

interface IAlbum {
  title: string;
  cover_big: string;
}

export interface IData {
  id: string | number;
  title: string;
  link: string;
  preview: string;
  duration: number;
  album: IAlbum;
  artist: ISinger;
}
