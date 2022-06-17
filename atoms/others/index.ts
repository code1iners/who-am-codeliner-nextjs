import { atom, selector } from "recoil";

export const avatarClickedcountAtom = atom({
  key: "avatarClickedcountAtom",
  default: 0,
});

export const avatarClickedLevel = selector({
  key: "avatarClickedLevel",
  get: ({ get }) => {
    const clickedCount = get(avatarClickedcountAtom);

    switch (true) {
      case clickedCount < 10:
        return "먼지";
      case clickedCount < 20:
        return "솜털";
      case clickedCount < 30:
        return "초보자";
      case clickedCount < 40:
        return "유단자";
      case clickedCount < 50:
        return "닌자";
      case clickedCount < 60:
        return "파괴자";
      case clickedCount < 70:
        return "몬스터";
      case clickedCount < 80:
        return "8T트럭";
      case clickedCount < 90:
        return "머신";
      case clickedCount < 100:
        return "미친사람";
      case clickedCount < 110:
        return "1류";
      default:
        return "이제그만";
    }
  },
});

export default {
  avatarClickedcountAtom,
};
