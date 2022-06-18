import { atom, selector } from "recoil";

export const avatarClickedCountAtom = atom({
  key: "avatarClickedCountAtom",
  default: 0,
});

export const avatarClickedLevel = selector({
  key: "avatarClickedLevel",
  get: ({ get }) => {
    const clickedCount = get(avatarClickedCountAtom);

    switch (true) {
      case clickedCount < 10:
        return "먼지";
      case clickedCount < 20:
        return "솜털";
      case clickedCount < 40:
        return "초보자";
      case clickedCount < 60:
        return "유단자";
      case clickedCount < 80:
        return "닌자";
      case clickedCount < 100:
        return "파괴자";
      case clickedCount < 150:
        return "몬스터";
      case clickedCount < 200:
        return "8T트럭";
      case clickedCount < 250:
        return "머신";
      case clickedCount < 300:
        return "미친사람";
      case clickedCount < 400:
        return "초월자";
      case clickedCount < 500:
        return "흑염룡";
      default:
        return "이제그만";
    }
  },
});

export default {
  avatarClickedCountAtom,
};
