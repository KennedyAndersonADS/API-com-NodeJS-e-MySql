```markdown
# API de Atendimento Hospitalar

Esta API de Atendimento Hospitalar permite gerenciar atendimentos, médicos e pacientes em um sistema hospitalar. A API fornece endpoints para criar, ler, atualizar e excluir registros de atendimentos, médicos e pacientes.

## Endpoints

### Atendimentos

#### Criar Atendimento
- **URL:** `/atendimento`
- **Método:** `POST`
- **Descrição:** Cria um novo atendimento.

#### Listar Atendimentos
- **URL:** `/atendimento`
- **Método:** `GET`
- **Descrição:** Lista todos os atendimentos.

#### Mostrar Atendimento
- **URL:** `/atendimento/:id`
- **Método:** `GET`
- **Descrição:** Mostra um atendimento específico.

#### Atualizar Atendimento
- **URL:** `/atendimento/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza um atendimento específico.

#### Deletar Atendimento
- **URL:** `/atendimento/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta um atendimento específico.

### Médicos

#### Criar Médico
- **URL:** `/medico`
- **Método:** `POST`
- **Descrição:** Cria um novo médico.

#### Listar Médicos
- **URL:** `/medico`
- **Método:** `GET`
- **Descrição:** Lista todos os médicos.

#### Mostrar Médico
- **URL:** `/medico/:id`
- **Método:** `GET`
- **Descrição:** Mostra um médico específico.

#### Mostrar Atendimentos de um Médico
- **URL:** `/medico/:id/atendimentos`
- **Método:** `GET`
- **Descrição:** Mostra todos os atendimentos de um médico específico.

#### Atualizar Médico
- **URL:** `/medico/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza um médico específico.

#### Deletar Médico
- **URL:** `/medico/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta um médico específico.

### Pacientes

#### Criar Paciente
- **URL:** `/paciente`
- **Método:** `POST`
- **Descrição:** Cria um novo paciente.

#### Listar Pacientes
- **URL:** `/paciente`
- **Método:** `GET`
- **Descrição:** Lista todos os pacientes.

#### Mostrar Paciente
- **URL:** `/paciente/:id`
- **Método:** `GET`
- **Descrição:** Mostra um paciente específico.

#### Mostrar Atendimentos de um Paciente
- **URL:** `/paciente/:id/atendimentos`
- **Método:** `GET`
- **Descrição:** Mostra todos os atendimentos de um paciente específico.

#### Atualizar Paciente
- **URL:** `/paciente/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza um paciente específico.

#### Deletar Paciente
- **URL:** `/paciente/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta um paciente específico.
```