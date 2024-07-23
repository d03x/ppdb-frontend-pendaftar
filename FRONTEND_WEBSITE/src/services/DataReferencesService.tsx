export function fetchTransportasiKesekolah() {
    return [
        { value: 1, label: "sepeda" },
        { value: 2, label: "mobil" },
        { value: 3, label: "motor" },
        { value: 4, label: "bus" },
        { value: 5, label: "angkot" }
    ]
}

export function fetchStatusYatimPiatu() {
    return [
        { value: "1", label: "Yatim" },
        { value: "2", label: "Piatu" },
        { value: "3", label: "Yatim Piatu" },
        { value: "4", label: "Tidak Yatim Piatu" }
    ];
}

export function fetchBahasaSehariHari() {
    return [
        { value: "1", label: "Bahasa Indonesia" },
        { value: "2", label: "Jawa" },
        { value: "3", label: "Sunda" },
        { value: "4", label: "Batak" },
        { value: "5", label: "Bali" },
        { value: "6", label: "Minangkabau" },
        { value: "7", label: "Bugis" },
        { value: "8", label: "Makassar" }
    ]
}

export function fetchWargaNegara(){
    return [
        { value: "1", label: "Warga Negara Indonesia" },
        { value: "2", label: "Warga Negara Amerika Serikat" },
        { value: "3", label: "Warga Negara Inggris" },
        { value: "4", label: "Warga Negara Jepang" },
        { value: "5", label: "Warga Negara Cina" },
        { value: "6", label: "Warga Negara Australia" },
        { value: "7", label: "Warga Negara Singapura" },
        { value: "8", label: "Warga Negara Malaysia" }
    ];
}
export function getSatuanJarak() {
    return [
        { label: 'M', value: 'M' },
        { label: 'KM', value: 'KM' },
        { label: 'MIL', value: 'MIL' },
    ]
}
export function fetchPenyakit() {
    return [
        {
            value: '0',
            label : "Tidak ada"
        },
        { value: "1", label: "Diabetes" },
        { value: "2", label: "Hipertensi" },
        { value: "3", label: "Asma" },
        { value: "4", label: "Jantung Koroner" },
        { value: "5", label: "Kanker" },
        { value: "6", label: "Gastritis" },
        { value: "7", label: "TBC" },
        { value: "8", label: "Flu" }
    ];
}

export function fetchGolonganDarah() {
    return [
        { value: "A", label: "Golongan Darah A" },
        { value: "B", label: "Golongan Darah B" },
        { value: "AB", label: "Golongan Darah AB" },
        { value: "O", label: "Golongan Darah O" }
    ];
    
}