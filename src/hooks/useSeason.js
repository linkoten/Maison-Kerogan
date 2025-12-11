import { useState, useEffect } from "react";

export const useSeason = () => {
  const [season, setSeason] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentSeason = () => {
      const now = new Date();
      const month = now.getMonth() + 1; // getMonth() retourne 0-11, on veut 1-12

      // Mode Hiver : Novembre (11) à Avril (4)
      // Mode Été : Mai (5) à Octobre (10)
      if (month >= 11 || month <= 4) {
        return "hiver";
      } else {
        return "ete";
      }
    };

    const currentSeason = getCurrentSeason();
    setSeason(currentSeason);
    setIsLoading(false);

    console.log(
      `🌡️ Saison actuelle: ${currentSeason === "hiver" ? "Hiver" : "Été"}`
    );
    console.log(`📅 Mois actuel: ${new Date().getMonth() + 1}`);
  }, []);

  return {
    season,
    isWinter: season === "hiver",
    isSummer: season === "ete",
    isLoading,
  };
};

// Utilitaire pour vérifier si un composant doit être affiché
export const useSeasonalVisibility = (component) => {
  const { season, isLoading } = useSeason();

  const visibilityRules = {
    // Composants visibles seulement en été
    ThéExtrait: ["ete"],

    // Composants toujours visibles (vous pouvez ajouter d'autres règles)
    BrunchExtrait: ["ete", "hiver"],
    LocationExtrait: ["ete", "hiver"],
    TapasExtrait: ["ete", "hiver"],
    HistoireDuLieu: ["ete", "hiver"],
    Event: ["ete", "hiver"],
    A_propos: ["ete", "hiver"],
  };

  const allowedSeasons = visibilityRules[component] || ["ete", "hiver"];
  const isVisible = !isLoading && allowedSeasons.includes(season);

  return {
    isVisible,
    season,
    isLoading,
  };
};
