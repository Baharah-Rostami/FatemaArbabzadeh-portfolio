
import SkillCard from "../sections/Skills/SkillCard";

import {
  designSkills,
  languages,
  computerSkills,
  personalSkills,
} from "../data/Skill";

import { GiPaintBrush } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";

export default function SkillsPage() {
  return (
    <>
  
       <div className="min-h-screen bg-linear-to-br from-[#F7F3E9] via-[#F5F0E4] to-[#E9E0D1] py-16 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3a2f2a]">
          Skills & Expertise
        </h1>
        <p className="text-[#6b5b52] mt-2">
          A combination of creative, technical, and personal abilities
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

        <SkillCard
          title="Design Tools"
          items={designSkills}
          icon={<GiPaintBrush />}
        />

        <SkillCard
          title="Languages"
          items={languages}
          icon={<FaLanguage />}
        />

        <SkillCard
          title="Computer Skills"
          items={computerSkills}
          icon={<FaComputer />}
        />

        <SkillCard
          title="Personal Skills"
          items={personalSkills}
          icon={<FaChessKnight />}
        />

      </div>
    </div>
    </>
 
  );
}