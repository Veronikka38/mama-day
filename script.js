const messages = {
    sunflower: {
        title: "Подсолнух",
        text: "Ты — моё солнышко! Спасибо, что всегда согреваешь меня своим теплом и заботой. Я тебя очень люблю!"
    },
    daisy: {
        title: "Ромашка",
        text: "Ты самая нежная и красивая. Пусть каждый твой день будет таким же светлым и чистым, как этот цветок!"
    },
    violet: {
        title: "Фиалка",
        text: "Твоя мудрость и спокойствие вдохновляют меня каждый день. Спасибо, что ты есть, мамочка!"
    },
    main: {
        title: "С Днем Матери!",
        text: "Спасибо за твою любовь, поддержку и бесконечное терпение. Этот маленький сайт — для тебя!"
    }
};

function showMessage(flowerType) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    
    if (messages[flowerType]) {
        title.innerText = messages[flowerType].title;
        text.innerText = messages[flowerType].text;
    }
    
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

// Закрытие окна при клике на темный фон
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// --- Логика для страницы с музыкой ---
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const vinyl = document.getElementById('vinyl');

    if (audio.paused) {
        audio.play().then(() => {
            vinyl.classList.add('playing');
        }).catch(error => {
            console.log("Ошибка воспроизведения: ", error);
            alert("Нажмите на пластинку еще раз, чтобы музыка заиграла!");
        });
    } else {
        audio.pause();
        vinyl.classList.remove('playing');
    }
}