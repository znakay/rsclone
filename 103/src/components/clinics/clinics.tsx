import React, { useState } from 'react';
import ClinicItem from './clinicItem/clinicItem';
import './clinic.css';
import { ClinicType, DoctorType } from '../../types';
import PersonalPage from '../PersonalPage';
import { isTypeNode } from 'typescript';
import { Subcategory } from '../../types/index';
import Filter from './../Filter';
import CreaterClinic from '../createrClinic';

interface clinicsProps {
  clinics: Array<ClinicType>;
  doctors: Array<DoctorType>;
  filterList: Array<Subcategory>;
  currentPageId: string | null;
}

type toggleFuncParam = {
  clinicId: string;
  doctorId: string;
  complete: boolean;
};

export default function Clinics({
  clinics,
  doctors,
  currentPageId,
  filterList,
}: clinicsProps) {
  const currentCity = localStorage.getItem('myCity') || 'Минск';
  const [isOpen, setOpen] = useState({
    clinicId: '',
    doctorId: '',
    complete: false,
  });
  const [filterCriterion, setFilterCriterion] = useState<string>('');

  const toggleOpenPersonalInformation = (value: toggleFuncParam): void => {
    setOpen(() => ({ ...value }));
  };

  return (
    <div className="clinic-container">
      <Filter
        currentPageId={currentPageId}
        filterList={filterList}
        onclick={ setFilterCriterion }
      />
      <div className="place-list">
        {clinics
          .filter(item => filterCriterion ? item.city === currentCity && item.subsection === filterCriterion : item.city === currentCity)
          .map((item, index) => {
            const currentDoctors = doctors.filter(
              doctor => doctor.idWork === item._id,
            );
            return (
              <ClinicItem
                key={index}
                whatIsIt={item.subsection}
                thisName={item.title}
                thisAddress={`${item.city}, ${item.address}`}
                thisPhone={item.tel}
                thisDescription={item.description}
                thisPictures={item.pictures}
                thisWorkingHours={item.workingHours}
                thisComplete={item.complete}
                thisDoctors={currentDoctors}
                toggleOpenPersonalInformation={toggleOpenPersonalInformation}
                idClinic={item._id}
              />
            );
          })}
      </div>
      {isOpen.complete && (
        <PersonalPage
          personalInfo={doctors.find(({ _id }) => _id === isOpen.doctorId)!}
          clinicInfo={clinics.find(({ _id }) => _id === isOpen.clinicId)!}
          isOpen={isOpen.complete}
          toggleOpenPersonalInformation={toggleOpenPersonalInformation}
        />
      )}
      <CreaterClinic />
    </div>
  );
}
