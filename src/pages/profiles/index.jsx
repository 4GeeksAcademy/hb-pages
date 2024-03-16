import { GetProfiles } from "@/services/getProfiles";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link"; 
import { Container } from "react-bootstrap";

export default function ProfilesPage()  {
    const { data, isLoading } = useQuery({
        queryKey: ["profiles"],
        queryFn: GetProfiles,
        refetchOnWindowFocus: true,
    });
    
    return (
        <Container>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map(profile => (
                        <li key={profile.id}>
                            <Link href={`/profiles/${profile.id}`}>
                                {profile.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    );
}
