/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import axios from "axios";
import { fetchBahasaSehariHari, fetchGolonganDarah, fetchPenyakit, fetchStatusYatimPiatu, fetchTransportasiKesekolah, fetchWargaNegara, getSatuanJarak } from "@/services/DataReferencesService";
import { FormItemWrapper } from "@/components/FormItemWrapper";
import { OptionType } from "@/types/FormTypes";
import { Building, Fingerprint, User } from "lucide-react";
export default function DataDiri() {
    const [alatTransportasi, setAlatTransportasi] = useState<OptionType[]>();
    const [statusYatimPiatu, setStatusYatimPiatu] = useState<OptionType[]>();
    const [wargaNegara, setWargaNegara] = useState<OptionType[]>();
    const [satuanJarak,setSatuanjarak] = useState<OptionType[]>()
    const [penyakitYangPernahDiderita, setPenyakitYangPernahDiderita] = useState<OptionType[]>()
    const [bahasaSehariHari, setBahasaSehariHari] = useState<OptionType[]>();
    const [golonganDarah, setGolonganDarah] = useState<OptionType[]>();
    async function fetchDataReference() {
        const [transportasi, statusYatim, bahasa, wargaNegara, penyakit, golonganDarah,satuanJarak] = await Promise.all([
            fetchTransportasiKesekolah(),
            fetchStatusYatimPiatu(),
            fetchBahasaSehariHari(),
            fetchWargaNegara(),
            fetchPenyakit(),
            fetchGolonganDarah(),
            getSatuanJarak()
        ])
        setAlatTransportasi(transportasi)
        setStatusYatimPiatu(statusYatim)
        setBahasaSehariHari(bahasa);
        setWargaNegara(wargaNegara)
        setPenyakitYangPernahDiderita(penyakit)
        setGolonganDarah(golonganDarah)
        setSatuanjarak(satuanJarak)
    }
    useEffect(function () {
        fetchDataReference();
    }, [])
    const onFinish = (data: any[]) => {
        // Tambahkan logika untuk mengirim data ke backend (misalnya menggunakan Axios)
        axios.post('/api/save-data', data)
            .then(response => {
                console.log('Data berhasil disimpan:', response.data);
            })
            .catch(error => {
                console.error('Gagal menyimpan data:', error);
            });
    };

    return (
        <Form onFinish={onFinish}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
                <FormItemWrapper name="nik" label="NIK (No Induk Kependudukan):" rules={[{ required: true, message: 'NIK harus diisi' }]}>
                    <Input addonBefore={<Fingerprint size={18}/>} count={{ max: 16, show: true }} placeholder="Masukkan NIK" />
                </FormItemWrapper>

                <FormItemWrapper name="nisn" label="NISN (No Induk Siswa Nasional):" rules={[{ required: true, message: 'NISN harus diisi' }]}>
                    <Input addonBefore={<User size={18}/>} count={{ max: 10, show: true }} placeholder="Masukkan NISN" />
                </FormItemWrapper>

                <FormItemWrapper name="namaLengkap" label="Nama Lengkap:" rules={[{ required: true, message: 'Nama lengkap harus diisi' }]}>
                    <Input placeholder="Masukkan nama lengkap" />
                </FormItemWrapper>

                <FormItemWrapper name="agama" label="Agama / Kepercayaan:" rules={[{ required: true, message: 'Agama harus dipilih' }]}>
                    <Select className="w-full" placeholder="Pilih agama">
                        <Select.Option value="islam">Islam</Select.Option>
                        <Select.Option value="kristen">Kristen</Select.Option>
                        <Select.Option value="katolik">Katolik</Select.Option>
                        <Select.Option value="hindu">Hindu</Select.Option>
                        <Select.Option value="buddha">Buddha</Select.Option>
                        <Select.Option value="konghucu">Konghucu</Select.Option>
                    </Select>
                </FormItemWrapper>

                <FormItemWrapper name="kewarganegaraan" label="Kewarganegaraan:" rules={[{ required: true, message: 'Kewarganegaraan harus diisi' }]}>
                    <Select options={wargaNegara} placeholder="Masukkan kewarganegaraan" />
                </FormItemWrapper>

                <FormItemWrapper name="anakKe" label="Anak ke berapa:" rules={[{ required: true, message: 'Anak ke berapa harus diisi' }]}>
                    <Input  placeholder="Masukkan anak ke berapa" />
                </FormItemWrapper>

                <FormItemWrapper name="jumlahAnakKandung" label="Jumlah anak kandung:" rules={[{ required: true, message: 'Jumlah anak kandung harus diisi' }]}>
                    <InputNumber className="w-full" placeholder="Masukkan jumlah anak kandung" />
                </FormItemWrapper>

                <FormItemWrapper name="jumlahAnakTiri" label="Jumlah anak tiri:" rules={[{ required: true, message: 'Jumlah anak tiri harus diisi' }]}>
                    <InputNumber className={"w-full"} placeholder="Masukkan jumlah anak tiri" />
                </FormItemWrapper>

                <FormItemWrapper name="jumlahAnakAngkat" label="Jumlah anak angkat:" rules={[{ required: true, message: 'Jumlah anak angkat harus diisi' }]}>
                    <InputNumber className={"w-full"} placeholder="Masukkan jumlah anak angkat" />
                </FormItemWrapper>

                <FormItemWrapper name="statusYatim" label="Anak yatim/piatu/yatim piatu:" rules={[{ required: true, message: 'Status yatim harus diisi' }]}>
                    <Select options={statusYatimPiatu} placeholder="Masukkan status yatim/piatu/yatim piatu" />
                </FormItemWrapper>

                <FormItemWrapper name="bahasaSehariHari" label="Bahasa sehari-hari di rumah:" rules={[{ required: true, message: 'Bahasa sehari-hari di rumah harus diisi' }]}>
                    <Select mode="multiple" allowClear options={bahasaSehariHari} placeholder="Masukkan bahasa sehari-hari di rumah" />
                </FormItemWrapper>
               

                <FormItemWrapper name="jenisKelamin" label="Jenis Kelamin:" rules={[{ required: true, message: 'Jenis kelamin harus dipilih' }]}>
                    <Select className="w-full" placeholder="Pilih jenis kelamin">
                        <Select.Option value="laki-laki">Laki-laki</Select.Option>
                        <Select.Option value="perempuan">Perempuan</Select.Option>
                    </Select>
                </FormItemWrapper>

                <FormItemWrapper name="tempatLahir" label="Tempat Lahir:" rules={[{ required: true, message: 'Tempat lahir harus diisi' }]}>
                    <Input placeholder="Masukkan tempat lahir" />
                </FormItemWrapper>

                <FormItemWrapper name="tanggalLahir" label="Tanggal Lahir:" rules={[{ required: true, message: 'Tanggal lahir harus diisi' }]}>
                    <DatePicker className="w-full" placeholder="Pilih tanggal lahir" />
                </FormItemWrapper>

                <FormItemWrapper name="alamatLengkap" label="Alamat lengkap dari siswa:" rules={[{ required: true, message: 'Alamat lengkap harus diisi' }]}>
                    <Input.TextArea rows={3} placeholder="Masukkan alamat lengkap" />
                </FormItemWrapper>

                <FormItemWrapper name="telepon" label="No. Telp:" rules={[{ required: true, message: 'No. Telp harus diisi' }]}>
                    <Input placeholder="Masukkan nomor telepon" />
                </FormItemWrapper>

                <FormItemWrapper name="email" label="E-Mail:" rules={[{ required: true, message: 'E-Mail harus diisi' }, { type: 'email', message: 'E-Mail tidak valid' }]}>
                    <Input type="email" placeholder="Masukkan email" />
                </FormItemWrapper>

                <FormItemWrapper name="tinggalDengan" label="Tinggal pada Orang tua/menumpang di asrama:" rules={[{ required: true, message: 'Tinggal dengan siapa harus diisi' }]}>
                    <Input addonBefore={<Building size={18}/>} placeholder="Masukkan tempat tinggal" />
                </FormItemWrapper>

                <FormItemWrapper name="jarakKeSekolah" label="Jarak tempat tinggal ke sekolah:" rules={[{ required: true, message: 'Jarak tempat tinggal ke sekolah harus diisi' }]}>
                    <Input addonAfter={<Select options={satuanJarak} placeholder={"Satuan Jarak"} />} placeholder="Masukkan jarak ke sekolah" />
                </FormItemWrapper>

                <FormItemWrapper name="transportasiKeSekolah" label="Ke sekolah dengan kendaraan / berjalan:" rules={[{ required: true, message: 'Transportasi ke sekolah harus diisi' }]}>
                    <Select options={alatTransportasi} placeholder="Masukkan transportasi ke sekolah" />
                </FormItemWrapper>

                <FormItemWrapper name="beratBadan" label="Berat badan waktu mendaftar (kg):" rules={[{ required: true, message: 'Berat badan harus diisi' }]}>
                    <Input addonBefore={"KG"} placeholder="Masukkan berat badan" />
                </FormItemWrapper>

                <FormItemWrapper name="tinggiBadan" label="Tinggi badan waktu mendaftar (cm):" rules={[{ required: true, message: 'Tinggi badan harus diisi' }]}>
                    <Input addonAfter={"CM"} placeholder="Masukkan tinggi badan" />
                </FormItemWrapper>

                <FormItemWrapper name="golonganDarah" label="Golongan darah:" rules={[{ required: true, message: 'Golongan darah harus diisi' }]}>
                    <Select options={golonganDarah} placeholder="Masukkan golongan darah" />
                </FormItemWrapper>

                <FormItemWrapper name="penyakit" label="Penyakit yang pernah diderita:" rules={[{ required: true, message: 'Penyakit yang pernah diderita harus diisi' }]}>
                    <Select options={penyakitYangPernahDiderita} placeholder="Masukkan penyakit yang pernah diderita" />
                </FormItemWrapper>
                <FormItemWrapper name="gambar" label="Foto Profile" rules={[{ required: true }]}>
                    <Upload action={"/profile/picture/upload"} maxCount={1} listType={"picture"}>
                        <Button>Pilih Foto</Button>
                    </Upload>
                </FormItemWrapper>
               
            </div>
            <Space>
                    <Button type="primary" htmlType="submit" block>SIMPAN</Button>
                    <Button type="default" htmlType="reset" block>Reset Formulir</Button>
                </Space>
        </Form>
    );
}
