/*
  Register.jsx
  - Formulaire d'inscription utilisant react-hook-form + yup pour la validation.
  - Comportement:
    1. L'utilisateur remplit pseudo, email, mot de passe et confirme le mot de passe.
    2. Le RGPD (case à cocher) doit être accepté.
    3. À la soumission, on appelle `POST /user` sur le backend.
    4. Si succès, on redirige vers la page de connexion.

  Notes pédagogiques:
  - Le schéma yup permet de valider les règles (format email, longueur mot de passe, correspondance des mots de passe).
  - En dev, vérifier la réponse du backend pour afficher les messages d'erreur utiles.
*/

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  };

  // Schéma yup pour valider les champs
  const schema = yup.object({
    username: yup.string().required("Ce champ est obligatoire"),
    email: yup
      .string()
      .email()
      .required("Le champ est obligatoire")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Format email non valide"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "Trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("La confirmation de mot de passe est obligatoire")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et conditions"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Fonction appelée à la soumission du formulaire
  async function submit(values) {
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });
      const responseFromBackend = await response.json();
      if (response.ok) {
        toast.success(responseFromBackend.message);
        navigate("/login");
        reset(defaultValues);
      } else {
        toast.error(responseFromBackend.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-xl rounded">
      <form
        className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="username" className="mb-2">
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="mb-2">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="confirmPassword" className="mb-2">
            Confirmation du mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="rgpd" className="mb-2">
            <input
              {...register("rgpd")}
              type="checkbox"
              className="mr-4"
              id="rgpd"
            />
            En soumettant ce formulaire, j'accepte ...
          </label>
          {errors.rgpd && <p className="text-red-500">{errors.rgpd.message}</p>}
        </div>

        <NavLink to="/login" className="text-blue-500">
          Déjà inscrit ?
        </NavLink>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
