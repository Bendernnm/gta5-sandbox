const ui = require('./menu');

mp.keys.bind(0x71, false, () => {
    if (ui.Visible) ui.Close();
    else ui.Open();
});
