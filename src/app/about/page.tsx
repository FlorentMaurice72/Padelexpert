import type { Metadata } from 'next';
import CTAButton from '@/components/ui/CTAButton';

export const metadata: Metadata = {
  title: 'À propos de PadelExpert',
  description:
    'Qui sommes-nous ? PadelExpert est un site indépendant créé pour aider les joueurs débutants à progresser et à bien choisir leur matériel de padel.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">À propos de PadelExpert</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          <strong>PadelExpert</strong> est un site indépendant créé par des passionnés de padel, pour les joueurs qui débutent ou souhaitent progresser rapidement.
        </p>

        <h2>Notre mission</h2>
        <p>
          Vous aider à faire les bons choix dès le départ : bonne raquette, bonnes chaussures, bonnes méthodes. Sans jargon inutile, sans publicité déguisée.
        </p>

        <h2>Comment on travaille</h2>
        <p>
          Chaque guide, comparatif ou test est rédigé avec soin. On compare les produits sur des critères concrets et on indique clairement nos recommandations.
        </p>

        <h2>Transparence sur l&apos;affiliation</h2>
        <p>
          Ce site contient des liens affiliés. Cela signifie que si vous achetez un produit via l&apos;un de nos liens, nous percevons une petite commission — sans frais supplémentaires pour vous. Cela nous permet de maintenir le site gratuitement.
        </p>
        <p>
          Nos recommandations restent indépendantes et objectives : nous n&apos;acceptons aucun produit payant et ne recommandons que ce que nous estimons réellement utile.
        </p>
      </div>

      <div className="mt-10">
        <CTAButton href="/guides" label="Découvrir nos guides" />
      </div>
    </div>
  );
}
