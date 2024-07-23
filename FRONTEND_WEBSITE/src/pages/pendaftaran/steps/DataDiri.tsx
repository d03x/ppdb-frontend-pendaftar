import { Fragment } from "react";
import {Button, Input, Select} from 'antd';

export default function DataDiri() {
    return (
        <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3 w-full">
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="nik">NIK (No Induk Kependudukan):</label>
                        <Input id="nik" name="nik" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="nisn">NISN (No Induk Siswa Nasional):</label>
                        <Input id="nisn" name="nisn" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="fullName">Nama Lengkap:</label>
                        <Input id="fullName" name="fullName" />
                    </div>
                    <div>
                        <label className="text-xs block whitespace-nowrap" htmlFor="religion">Agama / Kepercayaan:</label>
                        <Select id="religion" name="religion" className="w-full mt-1">
                            <Select.Option value="islam">Islam</Select.Option>
                            <Select.Option value="kristen">Kristen</Select.Option>
                            <Select.Option value="katolik">Katolik</Select.Option>
                            <Select.Option value="hindu">Hindu</Select.Option>
                            <Select.Option value="buddha">Buddha</Select.Option>
                            <Select.Option value="konghucu">Konghucu</Select.Option>
                        </Select>
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="nationality">Kewarganegaraan:</label>
                        <Input id="nationality" name="nationality" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="childOrder">Anak ke berapa:</label>
                        <Input id="childOrder" name="childOrder" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="numberOfSiblings">Jumlah anak kandung:</label>
                        <Input id="numberOfSiblings" name="numberOfSiblings" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="numberOfStepSiblings">Jumlah anak tiri:</label>
                        <Input id="numberOfStepSiblings" name="numberOfStepSiblings" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="numberOfAdoptedChildren">Jumlah anak angkat:</label>
                        <Input id="numberOfAdoptedChildren" name="numberOfAdoptedChildren" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="orphanStatus">Anak yatim/piatu/yatim piatu:</label>
                        <Input id="orphanStatus" name="orphanStatus" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="homeLanguage">Bahasa sehari-hari di rumah:</label>
                        <Input id="homeLanguage" name="homeLanguage" />
                    </div>
                </div>
                <div className="space-y-3 w-full">
                    <div>
                        <label className="text-xs block whitespace-nowrap" htmlFor="gender">Jenis Kelamin:</label>
                        <Select id="gender" name="gender" className="w-full mt-1">
                            <Select.Option value="male">Laki-laki</Select.Option>
                            <Select.Option value="female">Perempuan</Select.Option>
                        </Select>
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="birthPlace">Tempat Lahir:</label>
                        <Input id="birthPlace" name="birthPlace" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="birthDate">Tanggal Lahir:</label>
                        <Input id="birthDate" name="birthDate" type="date" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="fullAddress">Alamat lengkap dari siswa:</label>
                        <Input.TextArea id="fullAddress" name="fullAddress" rows={3} />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="phone">No. Telp:</label>
                        <Input id="phone" name="phone" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="email">E-Mail:</label>
                        <Input id="email" name="email" type="email" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="livingWith">Tinggal pada Orang tua/menumpang di asrama:</label>
                        <Input id="livingWith" name="livingWith" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="distanceToSchool">Jarak tempat tinggal ke sekolah:</label>
                        <Input id="distanceToSchool" name="distanceToSchool" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="transportToSchool">Ke sekolah dengan kendaraan / berjalan:</label>
                        <Input id="transportToSchool" name="transportToSchool" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="weight">Berat badan waktu mendaftar (kg):</label>
                        <Input id="weight" name="weight" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="height">Tinggi badan waktu mendaftar (cm):</label>
                        <Input id="height" name="height" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="bloodType">Golongan darah:</label>
                        <Input id="bloodType" name="bloodType" />
                    </div>
                    <div>
                        <label className="text-xs whitespace-nowrap" htmlFor="diseases">Penyakit yang pernah diderita:</label>
                        <Input id="diseases" name="diseases" />
                    </div>
                    <Button type={"primary"} block>SIMPAN</Button>
                </div>
            </div>
        </form>
    );
}
