"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function TechStack() {
    return (
        <Card radius="lg"
            isBlurred
            className="border-none bg-backgroundColor/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
            fullWidth >
            <CardHeader className="place-self-center">Technologies</CardHeader>
            <CardBody>
                <p>Next.js</p>
                <p>React</p>
                <p>Typescript</p>
                <p>NextUI</p>
                <p>Framer Motion</p>
                <p>Next Image</p>
                <p>Next Navigation</p>
            </CardBody>
            <CardFooter>
                <p>More to come</p>
            </CardFooter>
        </Card >
    );

}
