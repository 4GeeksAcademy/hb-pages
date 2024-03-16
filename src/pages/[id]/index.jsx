import { getProfileById } from "@/services/getProfileById";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";

export default function ProfilesPage() {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading } = useQuery(["profile", id], () => getProfileById(id));

    if (isLoading) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            <h2>Profile {data.Name}</h2>
            <img src={data.Picture} alt="Profile picture" width={100} height={100} />
            <p>{data.Backstory}</p>
        </Container>
    );
}
