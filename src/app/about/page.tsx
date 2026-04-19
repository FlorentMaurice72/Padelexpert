import type { Metadata } from 'next';
import CTAButton from '@/components/ui/CTAButton';

export const metadata: Metadata = {
  title: 'À propos de PrePadel',
  description:
    'PrePadel est un hub de progression padel indépendant, créé pour aider les débutants à apprendre, choisir leur matériel et progresser rapidement.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">À propos de PrePadel</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          <strong>PrePadel</strong> est un site indépendant créé par des passionnés de padel, pour ceux qui veulent apprendre correctement, choisir le bon matériel et progresser rapidement — sans jargon inutile.
        </p>

        <h2>Notre mission</h2>
        <p>
          Structurer l&apos;information padel autour de trois axes clairs : <strong>apprendre les bases</strong>, <strong>bien choisir son matériel</strong> et <strong>progresser efficacement</strong>. Un seul site pour couvrir tout le parcours du débutant.
        </p>

        <h2>Comment on travaille</h2>
        <p>
          Chaque guide, comparatif ou test est rédigé avec soin, sur des critères concrets et vérifiables. On ne recommande que ce qu&apos;on considère réellement utile à votre niveau.
        </p>

        <h2>Transparence sur l&apos;affiliation</h2>
        <p>
          Ce site contient des liens affiliés. Si vous achetez via l&apos;un de nos liens, nous percevons une petite commission — sans frais supplémentaires pour vous. Cela nous permet de maintenir le site gratuitement et de produire du contenu de qualité.
        </p>
        <p>
          Nos recommandations restent indépendantes : nous n&apos;acceptons aucun partenariat rémunéré et ne mettons en avant que ce qui correspond à nos critères de sélection.
        </p>
      </div>

      <div className="mt-10">
        <CTAButton href="/guides" label="Découvrir nos guides" />
      </div>
    </div>
  );
}
