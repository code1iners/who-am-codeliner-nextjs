import { atom, selector } from "recoil";
import getT from "next-translate/getT";

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
        return "avatar.level.0001";
      case clickedCount < 20:
        return "avatar.level.0002";
      case clickedCount < 40:
        return "avatar.level.0003";
      case clickedCount < 60:
        return "avatar.level.0004";
      case clickedCount < 80:
        return "avatar.level.0005";
      case clickedCount < 100:
        return "avatar.level.0006";
      case clickedCount < 150:
        return "avatar.level.0007";
      case clickedCount < 200:
        return "avatar.level.0008";
      case clickedCount < 250:
        return "avatar.level.0009";
      case clickedCount < 300:
        return "avatar.level.0010";
      case clickedCount < 400:
        return "avatar.level.0011";
      case clickedCount < 500:
        return "avatar.level.0012";
      default:
        return "avatar.level.0013";
    }
  },
});

export default {
  avatarClickedCountAtom,
};
