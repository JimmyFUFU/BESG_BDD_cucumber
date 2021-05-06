export class Theme {
  background() {
    const today = this.get_today();
    if (today.getMonth() === 11 && today.getDate() === 25) {
      return 'Xmas';
    }
    return 'Normal';
  }

  get_today() {
    return new Date();
  }
}