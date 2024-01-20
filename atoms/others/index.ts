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
        return "avatar.level.0001";
      case clickedCount < 50:
        return "avatar.level.0002";
      case clickedCount < 100:
        return "avatar.level.0003";
      case clickedCount < 200:
        return "avatar.level.0004";
      case clickedCount < 400:
        return "avatar.level.0005";
      case clickedCount < 800:
        return "avatar.level.0006";
      case clickedCount < 1600:
        return "avatar.level.0007";
      case clickedCount < 3200:
        return "avatar.level.0008";
      case clickedCount < 6400:
        return "avatar.level.0009";
      case clickedCount < 12800:
        return "avatar.level.0010";
      case clickedCount < 25600:
        return "avatar.level.0011";
      case clickedCount < 51200:
        return "avatar.level.0012";
      default:
        return "avatar.level.0013";
    }
  },
});

export default {
  avatarClickedCountAtom,
};
