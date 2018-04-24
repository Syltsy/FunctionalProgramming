(loop [kierros 0]
  (println (str "Kierros " kierros))
  (if (> kierros 3)
    (println "Heippa")
    (recur (inc kierros))))