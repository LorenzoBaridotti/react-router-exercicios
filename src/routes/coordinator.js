import { useNavigate } from "react-router-dom"

export const goToHome = (navigate) => {

    navigate("/")

};

export const goToProfile = (navigate) => {
    navigate("/profile/name")
}

export const goToError = (navigate) => {
    navigate("*")
}

export const goToProduct = (navigate) => {
    navigate("/product/:id")
}
