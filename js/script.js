// ============================================
// CALCULATOR MODALS SYSTEM
// ============================================

const calculatorTemplates = {
    passenger: {
        title: 'Калькулятор розмитнення легкових авто',
        html: `
            <div class="calculator-form">
                <div class="form-group">
                    <label class="form-label">Тип двигуна</label>
                    <div class="form-select-wrapper">
                        <select id="pass-engine-type" required>
                            <option value="">Оберіть тип</option>
                            <option value="Бензин">Бензин</option>
                            <option value="Дизель">Дизель</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Рік виготовлення</label>
                    <div class="form-select-wrapper">
                        <select id="pass-year" required>
                            <option value="">Оберіть рік</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="">Старше</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Об'єм двигуна (см³)</label>
                    <input type="number" id="pass-volume" required placeholder="Наприклад: 2000">
                </div>

                <div class="form-group">
                    <label class="form-label">Валюта по інвойсу</label>
                    <div class="form-select-wrapper">
                        <select id="pass-currency" required>
                            <option value="">Оберіть валюту</option>
                            <option value="GBP">GBP - Англ.Фунт</option>
                            <option value="USD">USD - Доллар США</option>
                            <option value="EUR">EUR - Евро</option>
                            <option value="PLN">PLN - Польський Злотий</option>
                            <option value="CAD">CAD - Канадс.Доллар</option>
                            <option value="CHF">CHF - Швейцарс.Франк</option>
                            <option value="CZK">CZK - Чеська крона</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ціна по інвойсу</label>
                    <input type="number" id="pass-price" required step="0.01" placeholder="Введіть ціну">
                </div>

                <div class="calc-buttons">
                    <button type="button" class="btn-calc btn-calculate" onclick="calculatePassenger()">Розрахувати</button>
                    <button type="button" class="btn-calc btn-reset" onclick="resetPassenger()">Очистити</button>
                </div>
            </div>

            <div class="calc-results" id="pass-results" style="display:none;">
                <div class="result-item">
                    <label class="form-label">Дата розрахунку</label>
                    <input type="text" id="pass-date" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Курс</label>
                    <input type="text" id="pass-rate" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу</label>
                    <input type="text" id="pass-result-currency" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу в гривнях</label>
                    <input type="text" id="pass-result-uah" readonly>
                </div>
                <button class="share-result-btn" onclick="shareResult('passenger')">
                    <span>📤</span> Поділитися результатом
                </button>
            </div>
        `
    },
    electric: {
        title: 'Калькулятор розрахунку електро автомобілів',
        html: `
            <div class="calculator-form">
                <div class="form-group">
                    <label class="form-label">Ємність акумулятора (кВт/год)</label>
                    <input type="number" id="elec-battery" required step="0.01" placeholder="Наприклад: 75.5">
                </div>

                <div class="form-group">
                    <label class="form-label">Валюта по інвойсу</label>
                    <div class="form-select-wrapper">
                        <select id="elec-currency" required>
                            <option value="">Оберіть валюту</option>
                            <option value="GBP">GBP - Англ.Фунт</option>
                            <option value="USD">USD - Доллар США</option>
                            <option value="EUR">EUR - Евро</option>
                            <option value="PLN">PLN - Польський Злотий</option>
                            <option value="CAD">CAD - Канадс.Доллар</option>
                            <option value="CHF">CHF - Швейцарс.Франк</option>
                            <option value="CZK">CZK - Чеська крона</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ціна по інвойсу</label>
                    <input type="number" id="elec-price" required step="0.01" placeholder="Введіть ціну">
                </div>

                <div class="calc-buttons">
                    <button type="button" class="btn-calc btn-calculate" onclick="calculateElectric()">Розрахувати</button>
                    <button type="button" class="btn-calc btn-reset" onclick="resetElectric()">Очистити</button>
                </div>
            </div>

            <div class="calc-results" id="elec-results" style="display:none;">
                <div class="result-item">
                    <label class="form-label">Дата розрахунку</label>
                    <input type="text" id="elec-date" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Курс</label>
                    <input type="text" id="elec-rate" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу</label>
                    <input type="text" id="elec-result-currency" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу в гривнях</label>
                    <input type="text" id="elec-result-uah" readonly>
                </div>
                <button class="share-result-btn" onclick="shareResult('electric')">
                    <span>📤</span> Поділитися результатом
                </button>
            </div>
        `
    },
    cargo: {
        title: 'Калькулятор розмитнення вантажних авто',
        html: `
            <div class="calculator-form">
                <div class="form-group">
                    <label class="form-label">Вік авто</label>
                    <div class="form-select-wrapper">
                        <select id="cargo-age" required>
                            <option value="">Оберіть вік</option>
                            <option value="До 5 років">До 5 років</option>
                            <option value="Від 5 до 8 років">Від 5 до 8 років</option>
                            <option value="Більше 8 років">Більше 8 років</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Повна вага</label>
                    <div class="form-select-wrapper">
                        <select id="cargo-weight" required>
                            <option value="">Оберіть вагу</option>
                            <option value="до 5 тонн">до 5 тонн</option>
                            <option value="від 5 - 20 тонн">від 5 - 20 тонн</option>
                            <option value="більше 20 тонн">більше 20 тонн</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Об'єм двигуна (см³)</label>
                    <input type="number" id="cargo-volume" required placeholder="Наприклад: 3000">
                </div>

                <div class="form-group">
                    <label class="form-label">Валюта по інвойсу</label>
                    <div class="form-select-wrapper">
                        <select id="cargo-currency" required>
                            <option value="">Оберіть валюту</option>
                            <option value="GBP">GBP - Англ.Фунт</option>
                            <option value="USD">USD - Доллар США</option>
                            <option value="EUR">EUR - Евро</option>
                            <option value="PLN">PLN - Польський Злотий</option>
                            <option value="CAD">CAD - Канадс.Доллар</option>
                            <option value="CHF">CHF - Швейцарс.Франк</option>
                            <option value="CZK">CZK - Чеська крона</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ціна по інвойсу</label>
                    <input type="number" id="cargo-price" required step="0.01" placeholder="Введіть ціну">
                </div>

                <div class="calc-buttons">
                    <button type="button" class="btn-calc btn-calculate" onclick="calculateCargo()">Розрахувати</button>
                    <button type="button" class="btn-calc btn-reset" onclick="resetCargo()">Очистити</button>
                </div>
            </div>

            <div class="calc-results" id="cargo-results" style="display:none;">
                <div class="result-item">
                    <label class="form-label">Дата розрахунку</label>
                    <input type="text" id="cargo-date" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Курс</label>
                    <input type="text" id="cargo-rate" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу</label>
                    <input type="text" id="cargo-result-currency" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу в гривнях</label>
                    <input type="text" id="cargo-result-uah" readonly>
                </div>
                <button class="share-result-btn" onclick="shareResult('cargo')">
                    <span>📤</span> Поділитися результатом
                </button>
            </div>
        `
    },
    truck: {
        title: 'Розрахунок для тягачів та напівпричепів',
        html: `
            <div class="calculator-form">
                <div class="form-group">
                    <label class="form-label">Імпортер</label>
                    <div class="form-select-wrapper">
                        <select id="truck-importer" required onchange="toggleEUR1()">
                            <option value="">Оберіть тип</option>
                            <option value="Фіз.особа">Фіз.особа</option>
                            <option value="Юр.особа">Юр.особа</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Сертифікат EUR.1</label>
                    <div class="form-select-wrapper">
                        <select id="truck-eur1" required>
                            <option value="">Оберіть</option>
                            <option value="Так">Так</option>
                            <option value="Ні">Ні</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ціна в євро</label>
                    <input type="number" id="truck-price" required step="0.01" placeholder="Введіть ціну">
                </div>

                <div class="calc-buttons">
                    <button type="button" class="btn-calc btn-calculate" onclick="calculateTruck()">Розрахувати</button>
                    <button type="button" class="btn-calc btn-reset" onclick="resetTruck()">Очистити</button>
                </div>
            </div>

            <div class="calc-results" id="truck-results" style="display:none;">
                <div class="result-item">
                    <label class="form-label">Дата розрахунку</label>
                    <input type="text" id="truck-date" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Курс євро</label>
                    <input type="text" id="truck-rate" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу (євро)</label>
                    <input type="text" id="truck-result-eur" readonly>
                </div>
                <div class="result-item">
                    <label class="form-label">Сума митного платежу (гривні)</label>
                    <input type="text" id="truck-result-uah" readonly>
                </div>
                <button class="share-result-btn" onclick="shareResult('truck')">
                    <span>📤</span> Поділитися результатом
                </button>
            </div>
        `
    }
};

// Global variables for storing calculation data
let calculationData = {};

// ============================================
// MODAL MANAGEMENT
// ============================================

function openCalculator(type) {
    const modal = document.getElementById(`calc-modal-${type}`);
    if (!modal) {
        createModal(type);
    }
    document.getElementById(`calc-modal-${type}`).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCalculator(type) {
    document.getElementById(`calc-modal-${type}`).classList.remove('active');
    document.body.style.overflow = 'auto';
}

function createModal(type) {
    const template = calculatorTemplates[type];
    const modalHTML = `
        <div id="calc-modal-${type}" class="calc-modal">
            <div class="calc-modal-overlay" onclick="closeCalculator('${type}')"></div>
            <div class="calc-modal-content">
                <div class="calc-modal-header">
                    <h3 class="calc-modal-title">${template.title}</h3>
                    <button class="calc-modal-close" onclick="closeCalculator('${type}')">&times;</button>
                </div>
                <div class="calc-modal-body">
                    ${template.html}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('calc-modals-container').insertAdjacentHTML('beforeend', modalHTML);
}

// Close modal on ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.calc-modal.active').forEach(modal => {
            const type = modal.id.replace('calc-modal-', '');
            closeCalculator(type);
        });
    }
});

// Initialize modals on page load
document.addEventListener('DOMContentLoaded', function() {
    ['passenger', 'electric', 'cargo', 'truck'].forEach(type => createModal(type));
    console.log('✓ Калькулятори ініціалізовано');
});

// ============================================
// API - CURRENCY RATES
// ============================================

async function fetchCurrencyRates() {
    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Помилка отримання курсів:', error);
        alert('Не вдалося отримати курси валют');
        return null;
    }
}

// ============================================
// PASSENGER CAR CALCULATOR
// ============================================

async function calculatePassenger() {
    const engineType = document.getElementById('pass-engine-type').value;
    const year = document.getElementById('pass-year').value;
    const volume = parseFloat(document.getElementById('pass-volume').value);
    const currency = document.getElementById('pass-currency').value;
    const price = parseFloat(document.getElementById('pass-price').value);

    if (!engineType || !year || !volume || !currency || !price) {
        alert('Заповніть всі поля');
        return;
    }

    const rates = await fetchCurrencyRates();
    if (!rates) return;

    const euroRate = rates.find(r => r.cc === 'EUR')?.rate;
    const selectedRate = rates.find(r => r.cc === currency)?.rate;

    if (!euroRate || !selectedRate) {
        alert('Не вдалося отримати курс валют');
        return;
    }

    // Convert price to EUR
    let priceEUR = currency === 'EUR' ? price : (price * selectedRate) / euroRate;

    // Year multiplier
    const yearMapping = {
        "2024": 1, "2023": 2, "2022": 3, "2021": 4, "2020": 5,
        "2019": 6, "2018": 7, "2017": 8, "2016": 9, "2015": 10,
        "2014": 11, "2013": 12, "2012": 13, "2011": 14, "2010": 15, "": 15
    };
    const yearValue = yearMapping[year] || 15;

    // Engine multiplier
    let engineMultiplier;
    if (engineType === 'Бензин') {
        engineMultiplier = volume <= 3000 ? 0.05 : 0.1;
    } else {
        engineMultiplier = volume <= 3500 ? 0.075 : 0.15;
    }

    // Calculate
    const excise = yearValue * (engineMultiplier * volume);
    const duty = priceEUR * 0.1;
    const baseForVAT = excise + duty + priceEUR;
    const vat = baseForVAT * 0.2;
    const totalEUR = excise + duty + vat;

    // Convert to selected currency
    let totalCurrency = currency === 'EUR' ? totalEUR : (totalEUR * euroRate) / selectedRate;
    const totalUAH = totalEUR * euroRate;

    // Store data for sharing
    calculationData.passenger = {
        year: year || 'Старше 2010',
        volume: volume,
        engineType: engineType,
        currency: currency,
        price: price.toFixed(2),
        result: totalCurrency.toFixed(2),
        resultUAH: totalUAH.toFixed(2)
    };

    // Display results
    document.getElementById('pass-results').style.display = 'block';
    document.getElementById('pass-date').value = new Date().toLocaleDateString('uk-UA');
    document.getElementById('pass-rate').value = `EUR: ${euroRate.toFixed(4)} | ${currency}: ${selectedRate.toFixed(4)}`;
    document.getElementById('pass-result-currency').value = `${totalCurrency.toFixed(2)} ${currency}`;
    document.getElementById('pass-result-uah').value = `${totalUAH.toFixed(2)} грн`;
}

function resetPassenger() {
    ['pass-engine-type', 'pass-year', 'pass-volume', 'pass-currency', 'pass-price'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('pass-results').style.display = 'none';
    delete calculationData.passenger;
}

// ============================================
// ELECTRIC CAR CALCULATOR
// ============================================

async function calculateElectric() {
    const battery = parseFloat(document.getElementById('elec-battery').value);
    const currency = document.getElementById('elec-currency').value;
    const price = parseFloat(document.getElementById('elec-price').value);

    if (!battery || !currency || !price) {
        alert('Заповніть всі поля');
        return;
    }

    const rates = await fetchCurrencyRates();
    if (!rates) return;

    const euroRate = rates.find(r => r.cc === 'EUR')?.rate;
    const selectedRate = rates.find(r => r.cc === currency)?.rate;

    if (!euroRate || !selectedRate) {
        alert('Не вдалося отримати курс валют');
        return;
    }

    // Convert to EUR
    let priceEUR = currency === 'EUR' ? price : (price * selectedRate) / euroRate;

    // Calculate
    const excise = battery * 1; // 1 EUR per kWh
    const baseForVAT = priceEUR + excise;
    const vat = baseForVAT * 0.2;
    const totalEUR = excise + vat;

    // Convert to selected currency
    let totalCurrency = currency === 'EUR' ? totalEUR : (totalEUR * euroRate) / selectedRate;
    const totalUAH = totalEUR * euroRate;

    // Store data
    calculationData.electric = {
        battery: battery,
        currency: currency,
        price: price.toFixed(2),
        result: totalCurrency.toFixed(2),
        resultUAH: totalUAH.toFixed(2)
    };

    // Display results
    document.getElementById('elec-results').style.display = 'block';
    document.getElementById('elec-date').value = new Date().toLocaleDateString('uk-UA');
    document.getElementById('elec-rate').value = `EUR: ${euroRate.toFixed(4)} | ${currency}: ${selectedRate.toFixed(4)}`;
    document.getElementById('elec-result-currency').value = `${totalCurrency.toFixed(2)} ${currency}`;
    document.getElementById('elec-result-uah').value = `${totalUAH.toFixed(2)} грн`;
}

function resetElectric() {
    ['elec-battery', 'elec-currency', 'elec-price'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('elec-results').style.display = 'none';
    delete calculationData.electric;
}

// ============================================
// CARGO CALCULATOR
// ============================================

async function calculateCargo() {
    const age = document.getElementById('cargo-age').value;
    const weight = document.getElementById('cargo-weight').value;
    const volume = parseFloat(document.getElementById('cargo-volume').value);
    const currency = document.getElementById('cargo-currency').value;
    const price = parseFloat(document.getElementById('cargo-price').value);

    if (!age || !weight || !volume || !currency || !price) {
        alert('Заповніть всі поля');
        return;
    }

    const rates = await fetchCurrencyRates();
    if (!rates) return;

    const euroRate = rates.find(r => r.cc === 'EUR')?.rate;
    const selectedRate = rates.find(r => r.cc === currency)?.rate;

    if (!euroRate || !selectedRate) {
        alert('Не вдалося отримати курс валют');
        return;
    }

    // Convert to EUR
    let priceEUR = currency === 'EUR' ? price : (price * selectedRate) / euroRate;

    // Coefficient
    let coef = 0;
    if (age === "До 5 років") {
        coef = weight === "до 5 тонн" ? 0.02 : weight === "від 5 - 20 тонн" ? 0.026 : 0.033;
    } else if (age === "Від 5 до 8 років") {
        coef = weight === "до 5 тонн" ? 0.8 : weight === "від 5 - 20 тонн" ? 1.04 : 1.32;
    } else {
        coef = weight === "до 5 тонн" ? 1 : weight === "від 5 - 20 тонн" ? 1.3 : 1.65;
    }

    const excise = coef * volume;
    const duty = priceEUR * 0.1;
    const baseForVAT = excise + priceEUR + duty;
    const vat = baseForVAT * 0.2;
    const totalEUR = excise + duty + vat;

    // Convert
    let totalCurrency = currency === 'EUR' ? totalEUR : (totalEUR * euroRate) / selectedRate;
    const totalUAH = totalEUR * euroRate;

    // Store data
    calculationData.cargo = {
        age: age,
        weight: weight,
        volume: volume,
        currency: currency,
        price: price.toFixed(2),
        result: totalCurrency.toFixed(2),
        resultUAH: totalUAH.toFixed(2)
    };

    // Display
    document.getElementById('cargo-results').style.display = 'block';
    document.getElementById('cargo-date').value = new Date().toLocaleDateString('uk-UA');
    document.getElementById('cargo-rate').value = `EUR: ${euroRate.toFixed(4)} | ${currency}: ${selectedRate.toFixed(4)}`;
    document.getElementById('cargo-result-currency').value = `${totalCurrency.toFixed(2)} ${currency}`;
    document.getElementById('cargo-result-uah').value = `${totalUAH.toFixed(2)} грн`;
}

function resetCargo() {
    ['cargo-age', 'cargo-weight', 'cargo-volume', 'cargo-currency', 'cargo-price'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('cargo-results').style.display = 'none';
    delete calculationData.cargo;
}

// ============================================
// TRUCK CALCULATOR
// ============================================

function toggleEUR1() {
    const importer = document.getElementById('truck-importer').value;
    const eur1Select = document.getElementById('truck-eur1');
    
    if (importer === 'Фіз.особа') {
        eur1Select.value = '';
        eur1Select.disabled = true;
    } else {
        eur1Select.disabled = false;
    }
}

async function calculateTruck() {
    const importer = document.getElementById('truck-importer').value;
    const eur1 = document.getElementById('truck-eur1').value;
    const priceEUR = parseFloat(document.getElementById('truck-price').value);

    if (!importer || !priceEUR) {
        alert('Заповніть всі поля');
        return;
    }

    if (importer === 'Юр.особа' && !eur1) {
        alert('Оберіть наявність сертифіката EUR.1');
        return;
    }

    const rates = await fetchCurrencyRates();
    if (!rates) return;

    const euroRate = rates.find(r => r.cc === 'EUR')?.rate;

    if (!euroRate) {
        alert('Не вдалося отримати курс євро');
        return;
    }

    let totalEUR = 0;

    if (importer === 'Фіз.особа' || (importer === 'Юр.особа' && eur1 === 'Ні')) {
        const duty = priceEUR * 0.1;
        const vat = (priceEUR + duty) * 0.2;
        totalEUR = duty + vat;
    } else if (importer === 'Юр.особа' && eur1 === 'Так') {
        totalEUR = priceEUR * 0.2;
    }

    const totalUAH = totalEUR * euroRate;

    // Store data
    calculationData.truck = {
        importer: importer,
        eur1: importer === 'Юр.особа' ? eur1 : 'Н/Д',
        priceEUR: priceEUR.toFixed(2),
        result: totalEUR.toFixed(2),
        resultUAH: totalUAH.toFixed(2)
    };

    // Display
    document.getElementById('truck-results').style.display = 'block';
    document.getElementById('truck-date').value = new Date().toLocaleDateString('uk-UA');
    document.getElementById('truck-rate').value = euroRate.toFixed(4);
    document.getElementById('truck-result-eur').value = `${totalEUR.toFixed(2)} EUR`;
    document.getElementById('truck-result-uah').value = `${totalUAH.toFixed(2)} грн`;
}

function resetTruck() {
    ['truck-importer', 'truck-eur1', 'truck-price'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('truck-eur1').disabled = false;
    document.getElementById('truck-results').style.display = 'none';
    delete calculationData.truck;
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function shareResult(type) {
    const data = calculationData[type];
    
    if (!data) {
        alert('Спочатку виконайте розрахунок');
        return;
    }

    let shareText = '📊 Розрахунок митних платежів\n\n';

    if (type === 'passenger') {
        shareText += `Рік: ${data.year}\n`;
        shareText += `Об'єм: ${data.volume} см³\n`;
        shareText += `Тип двигуна: ${data.engineType}\n`;
        shareText += `Валюта: ${data.currency}\n`;
        shareText += `Сума: ${data.price} ${data.currency}\n\n`;
        shareText += `💰 Митний платіж: ${data.result} ${data.currency}\n`;
        shareText += `💰 Митний платіж: ${data.resultUAH} грн\n\n`;
    } else if (type === 'electric') {
        shareText += `Ємність акумулятора: ${data.battery} кВт/год\n`;
        shareText += `Валюта: ${data.currency}\n`;
        shareText += `Сума: ${data.price} ${data.currency}\n\n`;
        shareText += `💰 Митний платіж: ${data.result} ${data.currency}\n`;
        shareText += `💰 Митний платіж: ${data.resultUAH} грн\n\n`;
    } else if (type === 'cargo') {
        shareText += `Вік: ${data.age}\n`;
        shareText += `Вага: ${data.weight}\n`;
        shareText += `Об'єм: ${data.volume} см³\n`;
        shareText += `Валюта: ${data.currency}\n`;
        shareText += `Сума: ${data.price} ${data.currency}\n\n`;
        shareText += `💰 Митний платіж: ${data.result} ${data.currency}\n`;
        shareText += `💰 Митний платіж: ${data.resultUAH} грн\n\n`;
    } else if (type === 'truck') {
        shareText += `Імпортер: ${data.importer}\n`;
        shareText += `EUR.1: ${data.eur1}\n`;
        shareText += `Ціна: ${data.priceEUR} EUR\n\n`;
        shareText += `💰 Митний платіж: ${data.result} EUR\n`;
        shareText += `💰 Митний платіж: ${data.resultUAH} грн\n\n`;
    }

    shareText += `🌐 Brokervn.com.ua`;

    // Try native share
    if (navigator.share) {
        navigator.share({
            title: 'Розрахунок митних платежів',
            text: shareText
        }).then(() => {
            showNotification('✓ Результат успішно поділено!');
        }).catch(() => {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('✓ Результат скопійовано в буфер обміну!');
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('✓ Результат скопійовано в буфер обміну!');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        color: white;
        padding: 18px 30px;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        z-index: 99999;
        animation: slideInRight 0.4s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

console.log('✓ Калькулятори завантажено та готові до роботи');

// ============================================
// FAQ FUNCTIONALITY
// ============================================

const faqData = {
    documents: {
        question: "Які документи потрібні для розмитнення авто",
        answer: `
            <ul>
                <li>Контракт купівлі-продажу або рахунок-фактура (інвойс, купча) що підтверджує факт купівлі та вартість автомобіля.</li>
                <li>Технічний паспорт (свідоцтво про реєстрацію) на автомобіль.</li>
                <li>Експортна декларація країни, з якої експортується автомобіль.</li>
                <li>Документ який підтверджує факт зняття з обліку авто в країні реєстрації.</li>
                <li>Сертифікат відповідності (сертифікат відповідності екологічним нормам та технічним вимогам).</li>
                <li>Квитанція про сплату митних платежів (митний збір, ПДВ, акциз).</li>
                <li>Паспорт громадянина України або інший документ, що посвідчує особу.</li>
                <li>Індифікаційний код.</li>
                <li>Довіреність на перевізника, якщо користуєтесь їхніми послугами.</li>
            </ul>
        `
    },
    valuation: {
        question: "Оцінка автомобіля для розмитнення",
        answer: `
            <ul>
                <li>Митна вартість є базою для розрахунку митних платежів, таких як ввізне мито, акцизний збір та ПДВ.</li>
                <li>Експертиза допомагає встановити об'єктивну ринкову вартість автомобіля, що запобігає можливим маніпуляціям із заниженням або завищеням вартості.</li>
                <li>Експертиза підтверджує, що вказана в документі вартість відповідає реальній ринковій вартості автомобіля.</li>
                <li>У випадку, якщо митний орган сумнівається у достовірності поданої вартості, експертиза може бути використана як незалежний метод оцінки для вирішення спірних питань.</li>
                <li>Українське законодавство вимагає визначення митної вартості на основі об'єктивних та документально підтверджених даних. Експертиза допомагає забезпечити відповідність цим вимогам.</li>
                <li>Експертиза додає прозорості та об'єктивності процесу митного оформлення.</li>
            </ul>
        `
    },
    buying: {
        question: "Купівля не розмитнених автомобілів в Україні",
        answer: `
            <p>Купівля не розмитненого автомобіля в Україні може бути вигідною, але водночас пов'язана з певними ризиками та складнощами. Щоб уникнути неприємних сюрпризів, варто звернути увагу на такі аспекти:</p>
            <ul>
                <li>Переконайтеся, що продавець дійсно має право на продаж авто, чи є підтверджуючі власність документи (договір купівлі-продажу, технічний паспорт). Перевірте, чи автомобіль не перебуває в арешті або під заставою. Також переконайтеся, що авто не числиться у розшуку в країні походження.</li>
                <li>Обов'язково зробіть розрахунок усіх платежів, які потрібно буде сплатити (митний платіж, сертифікація, зняття авто з обліку в країні реєстрації якщо це потрібно).</li>
                <li>Правовий статус авто в Україні: деякі не розмитнені авто можуть перебувати на тимчасовому ввезенні або транзитних номерах. Уточніть умови тимчасового перебування авто на території України та можливі штрафи за порушення термінів перебування. Якщо авто було ввезене в Україну без належного оформлення, воно може підпадати під штрафні санкції з боку митних органів.</li>
                <li>Екологічні стандарти: перевірте чи відповідає автомобіль екологічним стандартам (легкові автомобілі та пасажирські буси - "Євро-2 і вище", вантажні автомобілі та вантажні буси - "Євро-5 і вище").</li>
                <li>Перед покупкою не розмитненого авто варто звернутися до юриста або митного брокера для консультації. Вони допоможуть оцінити ризики та розрахувати точну вартість розмитнення. Митні брокери можуть допомогти з усіма формальностями та суттєво спростити процес розмитнення.</li>
            </ul>
        `
    },
    category: {
        question: "Які автомобілі розмитнюються як легкові",
        answer: `
            <p>До категорії легкових автомобілів відносяться транспортні засоби, призначені переважно для перевезення пасажирів і мають, як правило, не більше дев'яти місць (включаючи місце водія). В Україні, відповідно до класифікації, прийнятої на законодавчому рівні, легкові автомобілі належать до категорії M1.</p>
            <p><strong>Основні характеристики легкових автомобілів категорії M1:</strong></p>
            <ul>
                <li><strong>Призначення:</strong> Перевезення пасажирів.</li>
                <li><strong>Кількість місць:</strong> Не більше дев'яти, включаючи місце водія.</li>
                <li><strong>Тип кузова:</strong> Легкові автомобілі можуть мати різні типи кузова, такі як седан, хетчбек, універсал, купе, кабріолет, позашляховик (SUV), мінівен, кросовер тощо.</li>
                <li><strong>Вантажний відсік:</strong> Легкові автомобілі можуть мати багажник або відсік для перевезення вантажу, але основним призначенням є перевезення пасажирів.</li>
                <li><strong>Використання:</strong> В основному використовуються для особистих потреб, хоча можуть також використовуватися для таксі, каршерінгу або службових поїздок.</li>
                <li><strong>Маса:</strong> Легкові автомобілі мають загальну масу (маса в комплекті з вантажем) не більше 3,5 тонни.</li>
            </ul>
            <p>Легкові автомобілі не включають в себе вантажні автомобілі (категорія N), автобуси (категорії M2 і M3), а також спеціальні транспортні засоби, такі як автомобілі швидкої допомоги або поліцейські автомобілі, які мають інше призначення і технічні характеристики.</p>
        `
    },
    usa: {
        question: "Як порахувати митний платіж для автомобілів з Америки",
        answer: `
            <p>Розрахунок митних платежів для автомобілів завезених з Америки рахується як і для автомобілів завезених з Європи, одна відмінність в тому що в вартість автомобіля який транспортується з Америки потрібно включати транспортні витрати (вартість доставки з штатів до кордону України) і аукціонний збір (якщо такий є).</p>
            <p><strong>Приклад:</strong> якщо вартість авто по інвойсу 5000$, транспортні витрати (доставка) 800$, і аукціонний збір 700$, то вартість автомобіля при розрахунку потрібно зазначати 6500$.</p>
        `
    },
    electric: {
        question: "Нарахування митного платежу для електромобілів",
        answer: `
            <p>Для електромобілів в Україні існують спеціальні умови митного оформлення, які значно відрізняються від умов для автомобілів з двигунами внутрішнього згоряння.</p>
            <p><strong>Нижче наведено основні складові митного платежу для електромобілів:</strong></p>
            <ul>
                <li><strong>Ввізне мито</strong> для електромобілів становить 0%. Тобто мито на електромобілі не нараховується.</li>
                <li><strong>Акцизний податок</strong> на електромобілі становить 1 євро за 1 кВт*год ємності акумулятора.</li>
                <li><strong>ПДВ - 20%</strong> нараховується на митну вартість автомобіля (яка включає вартість покупки і доставку), після митного оформлення повертається.</li>
            </ul>
            <p><strong>Примітка:</strong> Важливо перевіряти актуальні закони та нормативні акти, оскільки умови митного оформлення можуть змінюватися.</p>
        `
    }
};

function openFaqModal(faqId) {
    const faq = faqData[faqId];
    
    if (faq) {
        document.getElementById('modalQuestion').textContent = faq.question;
        document.getElementById('modalAnswer').innerHTML = faq.answer;
        document.getElementById('faqModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFaqModal() {
    document.getElementById('faqModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function shareFAQ() {
    const question = document.getElementById('modalQuestion').textContent;
    const answerText = document.getElementById('modalAnswer').textContent.trim();
    
    const shareText = `
📋 ${question}

${answerText}

🌐 Brokervn.com.ua
    `.trim();
    
    if (navigator.share) {
        navigator.share({
            title: question,
            text: shareText
        }).then(() => {
            showNotification('✓ FAQ успішно поділено!');
        }).catch(() => {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

// ============================================
// CONSULTATION MODAL
// ============================================

function openConsultationModal() {
    document.getElementById('consultationModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeConsultationModal() {
    document.getElementById('consultationModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

async function submitConsultation(e) {
    e.preventDefault();
    
    const name = document.getElementById('consult-name').value;
    const phone = document.getElementById('consult-phone').value;
    
    // Формуємо повідомлення
    const message = `
🔔 НОВЕ ЗАМОВЛЕННЯ ДЗВІНКА

👤 Ім'я: ${name}
📞 Телефон: ${phone}

📅 Дата: ${new Date().toLocaleString('uk-UA')}

Сайт: Brokervn.com.ua
    `.trim();

    // ============================================
    // ВІДПРАВКА В TELEGRAM
    // ============================================
    // ВАЖЛИВО: Для роботи потрібно створити Telegram бота через @BotFather
    // та отримати Bot Token і Chat ID
    
    const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Замінити на свій токен
    const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';     // Замінити на свій Chat ID
    
    // Відправка в Telegram (розкоментуйте після налаштування)
    /*
    try {
        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (telegramResponse.ok) {
            console.log('✓ Повідомлення відправлено в Telegram');
        }
    } catch (error) {
        console.error('Помилка відправки в Telegram:', error);
    }
    */

    // ============================================
    // ВІДПРАВКА НА EMAIL
    // ============================================
    // Використовуємо FormSubmit.co для відправки email
    // Альтернатива: EmailJS, або власний backend
    
    const emailData = {
        name: name,
        phone: phone,
        date: new Date().toLocaleString('uk-UA'),
        message: message
    };

    // Відправка на email через FormSubmit (розкоментуйте після налаштування)
    /*
    try {
        const emailResponse = await fetch('https://formsubmit.co/brokervinnitsa@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                message: message,
                _subject: '🔔 Нове замовлення дзвінка - Brokervn.com.ua',
                _captcha: 'false',
                _template: 'table'
            })
        });
        
        if (emailResponse.ok) {
            console.log('✓ Email відправлено');
        }
    } catch (error) {
        console.error('Помилка відправки email:', error);
    }
    */

    // Показуємо повідомлення користувачу
    alert('Дякуємо! Ми зателефонуємо вам найближчим часом.');
    
    // Логуємо дані в консоль (для тестування)
    console.log('=== ДАНІ ЗАМОВЛЕННЯ ===');
    console.log('Ім\'я:', name);
    console.log('Телефон:', phone);
    console.log('Час:', new Date().toLocaleString('uk-UA'));
    console.log('Повідомлення для Telegram та Email:');
    console.log(message);
    
    // Закриваємо модалку та очищаємо форму
    closeConsultationModal();
    e.target.reset();
}

// ============================================
// SOCIAL MENU
// ============================================

function toggleSocialMenu() {
    const menu = document.getElementById('socialMenu');
    menu.classList.toggle('active');
}

// Close social menu when clicking outside
document.addEventListener('click', function(e) {
    const socialBtn = document.querySelector('.social-btn');
    const socialMenu = document.getElementById('socialMenu');
    
    if (socialBtn && socialMenu && !socialBtn.contains(e.target) && !socialMenu.contains(e.target)) {
        socialMenu.classList.remove('active');
    }
});

// ============================================
// INITIALIZE FAQ CARDS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // FAQ cards click handlers
    document.querySelectorAll('.faq-card').forEach(card => {
        card.addEventListener('click', function() {
            const faqId = this.dataset.faq;
            if (faqId) {
                openFaqModal(faqId);
            }
        });
    });

    // Close modals on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeConsultationModal();
            closeFaqModal();
            document.querySelectorAll('.calc-modal.active').forEach(modal => {
                const type = modal.id.replace('calc-modal-', '');
                closeCalculator(type);
            });
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('✓ Сайт повністю завантажено та готовий до роботи');
});
