let data = [];

self.onmessage = (event) => {
  data = event.data;
}

setInterval(() => {
  console.log(data);
  data.forEach((el) => {
    if (el.done) {
      return;
    }

    if (el.timestampDeadlineTime - (new Date()).getTime() < 60 * 60 * 1000) {
      var options = {
        body: "Осталось менее часа: " + el.name,
        icon: 'images/icon.png',
        badge: 'images/badge.png'
      };
  
      self.registration.showNotification('Сроки поджимают!!!', options);
    }
  })

}, 60000);
  