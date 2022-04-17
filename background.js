chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "Eye_Break") {
        chrome.notifications.create('test', {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Eye Break',
            message: 'Take a 20 second break and look away from your computer screen!',
            priority: 2,
        });
    }
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "Big_Break") {
        chrome.notifications.create('test', {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Relax',
            message: 'Take a 5 minute break and relax!',
            priority: 2,
        });
    }
});
