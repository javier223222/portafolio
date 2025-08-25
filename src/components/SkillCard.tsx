import { motion } from 'framer-motion';
import LevelDots from './LevelDots';
import Chip from './Chip';
import { skill} from '@/utils/data';
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function SkillCard({icon: Icon, title,classNames,skills,level }: {icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; title: string;classNames?: string;skills: skill[]; level: number}) {
  return (
    <motion.article
            className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur hover:border-white/20 transition"
            variants={fade}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Icon className={"h-5 w-5 "+classNames} />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <LevelDots level={level} />
            </div>

            <div className="flex flex-wrap gap-2.5">
            {
                skills.map((skill) => skill.type === title && <Chip key={skill.name}>{skill.name}</Chip>)
            }
              
            </div>

          </motion.article>
  );
}