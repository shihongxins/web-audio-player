export class ListCircle<T> {
  list: T[];
  count: number;
  index: number;
  constructor(list: Array<T> = [], count = 1, index = 0) {
    this.list = list;
    this.count = count;
    this.index = index;
  }
  lastRound() {
    this.index = (this.index - this.count + this.list.length) % this.list.length;
  }
  nextRound() {
    this.index = (this.index + this.count + this.list.length) % this.list.length;
  }
  selectedList() {
    let list = [];
    if (this.count > this.list.length) {
      // 如果数量大于列表数，全部取出
      list = [...this.list];
    } else {
      list = this.list.slice(this.index, this.index + this.count);
      if (list.length < this.count) {
        // 如果一直取到末尾，仍未满足数量，从开头处再次取进行补足
        list = list.concat(this.list.slice(0, this.count - list.length));
      }
    }
    return list;
  }
}

export interface ImageColors {
  imageData: number[];
  colors: {
    [props: string]: number;
  };
  theme: string;
  complementary: string;
}

export function getImageColors(imageData: number[] = []) {
  const imageColors: ImageColors = {
    imageData,
    colors: {},
    theme: "",
    complementary: "",
  };
  let i = 0;
  while (i < imageData.length) {
    const r = Math.floor(+imageData[i] || 0);
    const g = Math.floor(+imageData[i + 1] || 0);
    const b = Math.floor(+imageData[i + 2] || 0);
    const a = Math.floor(+imageData[i + 3] || 0);
    const color = `rgba(${r}, ${g}, ${b}, ${a})`;
    imageColors.colors[color] = (imageColors.colors[color] || 0) + 1;
    i += 4;
  }
  imageColors.colors = Object.fromEntries(
    Object.entries(imageColors.colors)
      .sort((more, less) => less[1] - more[1])
      .map((colorObj, index) => {
        if (index === 0) {
          imageColors.theme = colorObj[0];
          imageColors.complementary = imageColors.theme.replace(/\d+/gm, (match) =>
            String(255 - Math.floor(+match || 0))
          );
        }
        return colorObj;
      })
  );
  return imageColors;
}
