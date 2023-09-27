import { useEffect, useState } from "react";
import Input from "./Input";
import StarsRating from "./StarsRating";
import Textarea from "./Textarea";
import axios from "axios";
import Spinner from "./Spinner";

export default function ProductReviews({ product }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);

  async function submitReview() {
    const data = { title, description, stars, product: product._id };
    await axios.post("/api/reviews", data).then((res) => {
      setTitle("");
      setDescription("");
      setStars(0);
      loadReviews();
    });
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setReviewsLoading(true);
    await axios.get("/api/reviews?product=" + product._id).then((res) => {
      setReviews(res.data);
      setReviewsLoading(false);
    });
  }

  return (
    <div className="mt-10">
      <h2 className="text-[1.4rem] font-bold my-4">Avaliações</h2>
      <div className="grid grid-cols-1 mb-[40px] gap-[20px] min-[768px]:grid-cols-2 min-[768px]:40px">
        <div>
          <div>
            <div className="bg-white rounded-[10px] p-[30px]">
              <h3 className="text-[1rem] mb-2">Adicionar avaliação</h3>
              <div>
                <StarsRating onChange={setStars} />
              </div>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
              />
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite sua avaliação"
              />
              <div>
                <button
                  onClick={submitReview}
                  className="py-2 px-4 bg-gray-900 text-white rounded-md"
                >
                  Enviar avaliação
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-[10px] p-[30px]">
            <h3 className="text-[1rem] mb-2">Todas avaliações</h3>
            {reviewsLoading && <Spinner fullWidth={true} />}
            {reviews.length === 0 && <p>Sem avaliações :(</p>}
            {reviews.length > 0 &&
              reviews.map((review) => (
                <div
                  className="mb-[10px] py-[20px] border-t-[1px] border-[#aaa]"
                  key={review._id}
                >
                  <div className="flex justify-between">
                    <StarsRating
                      disabled={true}
                      defaultHowMany={review.stars}
                    />

                    <time className="font-bold text-gray-400">
                      {new Date(review.createdAt).toLocaleString("pt-BR")}
                    </time>
                  </div>
                  <h3 className="m-0 font-semibold text-lg">{review.title}</h3>
                  <p className="m-0 text-[1rem] text-[#666]">
                    {review.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
