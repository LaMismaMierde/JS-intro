const chess = (size) => {
    if (size == 1) {
        return null
    } else {
        let black = '*';
        let white = ' ';
        let desk = '';
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if ((j + i) % 2 === 0) {
                    desk += black;
                } else {
                    desk += white
                }
            }
            desk += '\n'
        }
        return desk
    }
}