<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

#[ApiResource]
#[Route('/api')]
class MessageController extends AbstractController
{
    private $messageRepository;

    public function __construct(MessageRepository $messageRepository)
    {
        $this->messageRepository = $messageRepository;
    }

    #[Route('/messages', name: 'message-save', methods: 'POST')]
    public function add(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $name = $data['name'];
        $email = $data['email'];
        $gender = $data['gender'];
        $content = $data['content'];

        if (empty($name) || empty($email) || empty($gender) || empty($content)) {
            throw new NotFoundHttpException('Expecting mandatory parameters!');
        }

        $this->messageRepository->saveMessage($name, $email, $gender, $content);

        return new JsonResponse(['status' => 'Customer created!'], Response::HTTP_CREATED);
    }

    #[Route('/messages', name: 'message-find-all', methods: 'GET')]
    public function getAll(): JsonResponse
    {
        $messages = $this->messageRepository->findAll();
        $data = [];

        foreach ($messages as $message) {
            $data[] = [
                'name' => $message->getName(),
                'email' => $message->getEmail(),
                'gender' => $message->getGender(),
                'content' => $message->getContent(),
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }
}
