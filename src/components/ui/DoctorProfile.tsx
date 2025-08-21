import React from 'react';
import { motion } from 'framer-motion';

type DoctorProfileProps = {
  name: string;
  title: string;
  image: string;
  philosophy: string;
  qualifications: string[];
};

const DoctorProfile: React.FC<DoctorProfileProps> = ({
  name,
  title,
  image,
  philosophy,
  qualifications,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <div className="relative mb-8 inline-block">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-clinic-accent p-1">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-luxury"
        >
          <span className="text-clinic-accent font-cormorant text-lg">
            {title}
          </span>
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-3xl md:text-4xl font-cormorant mb-4"
      >
        {name}
      </motion.h2>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg italic text-gray-600 mb-8 max-w-2xl mx-auto"
      >
        "{philosophy}"
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {qualifications.map((qualification, index) => (
          <span
            key={index}
            className="bg-clinic-secondary bg-opacity-50 px-4 py-2 rounded-full text-sm"
          >
            {qualification}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DoctorProfile;